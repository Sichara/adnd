import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
    @Input() className: string = '';
    @Input() placeholder: string = '';
    @Input() checked: boolean = true;
    @Input() required: boolean = false;
    @Input() disabled: boolean = false;
    @Input() hidden: boolean = false;
    @Input() name: string = null;
    @Output() onChange: EventEmitter<Object> = new EventEmitter();

    onChangeHandler(result: boolean): void {
        this.onChange.emit(result);
    }
}
