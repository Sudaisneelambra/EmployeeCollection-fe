import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { AdminServiceService } from '../../services/admin-service.service';


// importing material
import { MatInputModule } from '@angular/material/input';
import { ButtonComponent } from 'src/app/components/button/button.component';

@Component({
  selector: 'app-location-form',
  standalone: true,
  imports: [CommonModule,ButtonComponent,ReactiveFormsModule,MatInputModule],
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.css']
})
export class LocationFormComponent{
  locationForm!: FormGroup;

  constructor(
		private fb: FormBuilder,
		private commonService: CommonService,
		private adminService: AdminServiceService 
  ) {
		this.locationForm = fb.group({
			locationName: ['', [Validators.required, Validators.maxLength(25)]],
		});
  }

  // get the controll of form
  get f() {
    	return this.locationForm.controls;
  }

  // onsubmit
  onSubmit() {
		if (this.locationForm.valid) {
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

			/**promise perform the task */
			promise.then(() => {
				this.adminService.addLocation(this.locationForm.value).subscribe({
				next: (res) => {
					this.locationForm.reset()
					this.commonService.loadingBooleanBe.next(false)
					this.commonService.successBooleanBe.next(true)
					this.commonService.successMessageBe.next(res.message);
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
