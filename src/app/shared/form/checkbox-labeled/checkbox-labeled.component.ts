import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-checkbox-labeled',
    templateUrl: './checkbox-labeled.component.html',
    styleUrls: ['./checkbox-labeled.component.scss']
})
export class CheckboxLabeledComponent {
    @Input() className: string = '';
    @Input() placeholder: string = '';
    @Input() checked: boolean = true;
    @Input() required: boolean = false;
    @Input() disabled: boolean = false;
    @Input() showCheckbox: boolean = true;
    @Input() name: string = null;
    @Output() onChange: EventEmitter<Object> = new EventEmitter();

    onChangeHandler(result: boolean): void {
        this.onChange.emit(result);
    }
}
