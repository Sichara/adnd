import { BehaviorSubject, Observable } from 'rxjs/Rx';

export abstract class StateService<T> {
    protected _state: BehaviorSubject<T> = new BehaviorSubject(this.initialState());

    constructor () {}

    public select(property: keyof T, startFormLatest: boolean = false): Observable<T[keyof T]> {
        const storedValues$: Observable<T> = Observable.of(this.getValue())
            .filter(() => startFormLatest);

        return Observable.merge(storedValues$, this.state)
            .map((state: T) => {
                return state[property];
            })
            .filter((prop: T[keyof T]) => {
                return prop !== undefined;
            })
            .distinctUntilChanged();
    }

    public update(state: T): void {
        this._state.next(state);
    }

    public updateProperty<T1>(property: keyof T, value: T[keyof T] | T1): void {
        this.update(Object.assign({}, this.getValue(), {[property]: value}));
    }

    public trigger(prop: keyof T): void {
        this.updateProperty<string>(prop, `${Date.now()}`);
    }

    public resetState(): void {
        this._state.next(this.initialState());
    }

    public get state(): Observable<T> {
        return this._state.asObservable();
    }

    public getValue(): T {
        return this._state.getValue();
    }

    abstract initialState(): T;
}
