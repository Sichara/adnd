import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
    @Input() selectItems: any[];
    @Output() onChange: EventEmitter<Object> = new EventEmitter();

    onChangeHandler($event: Event): void {
        this.onChange.emit($event);
    }
}
