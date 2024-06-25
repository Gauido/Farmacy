import { Component } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { ButtonComponent } from '../../components/button/button.component';
import { Router } from '@angular/router';
import { PaginationComponent } from '../../components/pagination/pagination.component';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [TableComponent, ButtonComponent, PaginationComponent],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css',
})
export class PersonComponent {
  //Se queda de ejemplo para ver como se manda al componente tabla
  columns = [
    { header: 'Name', field: 'name' },
    { header: 'Title', field: 'title' },
    { header: 'Email', field: 'email' },
    { header: 'Role', field: 'role' },
  ];

  users: User[] = [
    {
      name: 'Lindsay Walton',
      title: 'Front-end Developer',
      email: 'lindsay.walton@example.com',
      role: 'Member',
    },
    {
      name: 'Courtney Henry',
      title: 'Designer',
      email: 'courtney.henry@example.com',
      role: 'Admin',
    },
    {
      name: 'Lindsay Walton',
      title: 'Front-end Developer',
      email: 'lindsay.walton@example.com',
      role: 'Member',
    },
    {
      name: 'Courtney Henry',
      title: 'Designer',
      email: 'courtney.henry@example.com',
      role: 'Admin',
    },
    {
      name: 'Lindsay Walton',
      title: 'Front-end Developer',
      email: 'lindsay.walton@example.com',
      role: 'Member',
    },
    {
      name: 'Courtney Henry',
      title: 'Designer',
      email: 'courtney.henry@example.com',
      role: 'Admin',
    },
    {
      name: 'Lindsay Walton',
      title: 'Front-end Developer',
      email: 'lindsay.walton@example.com',
      role: 'Member',
    },
    {
      name: 'Courtney Henry',
      title: 'Designer',
      email: 'courtney.henry@example.com',
      role: 'Admin',
    },
    {
      name: 'Lindsay Walton',
      title: 'Front-end Developer',
      email: 'lindsay.walton@example.com',
      role: 'Member',
    },
    {
      name: 'Courtney Henry',
      title: 'Designer',
      email: 'courtney.henry@example.com',
      role: 'Admin',
    },
    {
      name: 'Lindsay Walton',
      title: 'Front-end Developer',
      email: 'lindsay.walton@example.com',
      role: 'Member',
    },
    {
      name: 'Courtney Henry',
      title: 'Designer',
      email: 'courtney.henry@example.com',
      role: 'Admin',
    },
    {
      name: 'Lindsay Walton',
      title: 'Front-end Developer',
      email: 'lindsay.walton@example.com',
      role: 'Member',
    },
    {
      name: 'Courtney Henry',
      title: 'Designer',
      email: 'courtney.henry@example.com',
      role: 'Admin',
    },
    {
      name: 'Tom Cook',
      title: 'Director of Product',
      email: 'tom.cook@example.com',
      role: 'Member',
    },
    {
      name: 'Whitney Francis',
      title: 'Copywriter',
      email: 'whitney.francis@example.com',
      role: 'Admin',
    },
    {
      name: 'Leonard Krasner',
      title: 'Senior Designer',
      email: 'leonard.krasner@example.com',
      role: 'Owner',
    },
    {
      name: 'Floyd Miles',
      title: 'Principal Designer',
      email: 'floyd.miles@example.com',
      role: 'Member',
    },
  ];

  constructor(private router: Router) {}
  onChangePage(page: number) {}
  navigate(routes: string[]) {
    this.router.navigate(routes);
  }
}
interface User {
  name: string;
  title: string;
  email: string;
  role: string;
}
