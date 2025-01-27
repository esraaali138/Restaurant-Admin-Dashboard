import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-field',
  standalone: false,

  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css',
})
export class InputFieldComponent {
  @Input() type!: string;
  @Input() name!: string;
  @Input() placeholder!: string;
  @Input() errorMessage: string = 'This field is required'
  @Input() value!: string;
  @Input() label!: string;
  @Input() pattern: any;

}
