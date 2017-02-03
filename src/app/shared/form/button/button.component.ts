import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-button',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
    @Input() className: string = 'st-btn__default';
    @Input() disabled: boolean = false;
    @Output() onClick: EventEmitter<Object> = new EventEmitter();

    clickHandler(): void {
        this.onClick.emit();
    }
}
