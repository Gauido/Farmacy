import { Component } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SelectComponent } from '../../components/select/select.component';
import { tiposDeDocumentos } from '../../models/typeIDentity';
import { DataPickerComponent } from '../../components/data-picker/data-picker.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DataPickerComponent,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  form!: FormGroup;

  optionsIdentity = tiposDeDocumentos;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      firstname: ['', Validators.required],
      lastName: ['', Validators.required],
      documentType: ['', Validators.required],
      documentNumber: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]],
      dateOfBirth: ['', Validators.required],
    });
  }

  onSubmit() {}

  onBack() {
    this.router.navigate(['login']);
  }
}
