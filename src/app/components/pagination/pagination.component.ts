import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  @Input() total!: number;
  @Output() changePage = new EventEmitter<any>();

  onChangePage() {
    this.changePage.emit(1);
  }
}
