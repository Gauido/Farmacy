import { Component, Input } from '@angular/core';
import { TableColumn } from '../../models/tablecolumn';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent<T extends Record<string, any>> {
  @Input() columns: TableColumn[] = [];
  @Input() data: T[] = [];
}
