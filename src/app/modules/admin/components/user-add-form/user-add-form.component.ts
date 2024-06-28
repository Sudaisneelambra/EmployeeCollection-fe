import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

// import interfaces
import { Designation } from 'src/app/interfaces/designation.interface';

// importing material
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AdminServiceService } from '../../services/admin-service.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
@Component({
  selector: 'app-user-add-form',
  standalone: true,
  imports: [CommonModule, MatInputModule, ReactiveFormsModule, MatSelectModule],
  templateUrl: './user-add-form.component.html',
  styleUrls: ['./user-add-form.component.css'],
})
export class UserAddFormComponent {

  userForm!: FormGroup;
  @Input() designations!: Designation[];

  constructor(
    private fb: FormBuilder,
  ) {
    this.userForm = fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10),
        ],
      ],
      designation: ['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      address:['',[Validators.required, Validators.maxLength(100)]]
    });
  }

  // get the controll of form
  get f() {
    return this.userForm.controls;
  }



}
