import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
})
export class InputComponent {
    @Input() className: string;
    @Input() type: string = 'text';
    @Input() value: string = '';
    @Input() placeholder: string = '';
    @Input() disabled: boolean = false;
    @Output() onChange: EventEmitter<Event> = new EventEmitter<Event>();

    onChangeHandler($event: Event): void {
        this.onChange.emit($event);
    }
}
