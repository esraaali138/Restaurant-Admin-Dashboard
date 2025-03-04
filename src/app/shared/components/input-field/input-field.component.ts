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
  @Input() placeholder: string = '';
  @Input() errorMessage: string = '';
  @Input() value: any;
  @Input() label!: string;
  @Input() pattern!: string;
  @Input() submitted = false;
}
