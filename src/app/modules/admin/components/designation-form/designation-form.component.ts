import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

// importing material
import { MatInputModule } from '@angular/material/input';
import { ButtonComponent } from 'src/app/components/button/button.component';

// service im
import { CommonService } from 'src/app/services/common.service';
import { AdminServiceService } from '../../services/admin-service.service';

@Component({
  selector: 'app-designation-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, ButtonComponent],
  templateUrl: './designation-form.component.html',
  styleUrls: ['./designation-form.component.css'],
})
export class DesignationFormComponent {
  designationForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private commonService: CommonService,
    private adminService: AdminServiceService
  ) {
    this.designationForm = fb.group({
      designationName: ['', [Validators.required, Validators.maxLength(25)]],
    });
  }

  // get the controll of form
  get f() {
    return this.designationForm.controls;
  }

  // onsubmit
  onSubmit() {
    if (this.designationForm.valid) {
      this.commonService.confirmbooleanBe.next(true);
      this.commonService.confirmMessageBe.next(
        'Are you sure to add this Designation in your database'
      );
      let data = {};
      const promise = new Promise((resolve, reject) => {
        data = {
          resolve,
        };
      });
      this.commonService.confirmPromise.next(data);

      promise.then(() => {
        this.adminService.addDesignation(this.designationForm.value).subscribe({
          next: (res) => {
            this.commonService.successBooleanBe.next(true)
            this.commonService.successMessageBe.next(res.data);
            this.commonService.confirmbooleanBe.next(false);
            this.commonService.confirmMessageBe.next('');
          },
          error: (err) => {
            this.commonService.confirmbooleanBe.next(false);
            this.commonService.confirmMessageBe.next('');
          },
        });
      });
    } else {
      alert('field is blank or limit exceed');
    }
  }
}
