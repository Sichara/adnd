import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-input-debounce',
    templateUrl: './input-debounce.component.html'
})
export class InputDebounceComponent {
    @Input() className: string;
    @Input() placeholder: string = '';
    @Input() inputValue: string = '';
    @Input() type: string = 'text';
    @Input() delay: number = 300;
    @Output() value: EventEmitter<Object> = new EventEmitter();

    constructor (private elementRef: ElementRef) {
        const eventStream: Observable<string> = Observable.fromEvent(elementRef.nativeElement, 'keyup')
            .map(() => this.inputValue)
            .debounceTime(this.delay)
            .distinctUntilChanged();

        eventStream.subscribe((input: string) => this.value.emit(input));
    }
}
