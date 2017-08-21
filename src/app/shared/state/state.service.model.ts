import { Observable } from 'rxjs/Rx';

export interface StateServiceModel<T> {
    state: Observable<T>;
    select(property: keyof T, startFormLatest?: boolean): Observable<T[keyof T]>;
    update(state: T): void;
    updateProperty<T1>(property: keyof T, value: T[keyof T] | T1): void;
    trigger(prop: keyof T): void;
    resetState(): void;
    initialState(): T;
    getValue(): T;
}
