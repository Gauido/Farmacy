import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() class!: string;
  @Input() label!: string;
  @Input() disabled!: boolean;

  @Output() clicked = new EventEmitter();

  onClick() {
    this.clicked.emit();
  }
}
