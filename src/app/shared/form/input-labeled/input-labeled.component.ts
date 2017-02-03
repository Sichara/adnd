import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-input-labeled',
  templateUrl: './input-labeled.component.html',
  styleUrls: ['./input-labeled.component.scss']
})
export class InputLabeledComponent {
  @Input() className: string;
  @Input() type: string = 'text';
  @Input() value: string = '';
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Output() onChange: EventEmitter<Object> = new EventEmitter();

  onChangeHandler($event: Event): void {
    this.onChange.emit($event);
  }
}
