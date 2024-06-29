	import {
	Component,
	Input,
	ChangeDetectionStrategy,
	signal,
	OnInit,
	OnChanges,
	} from '@angular/core';
	import { CommonModule } from '@angular/common';
	import {
	FormBuilder,
	FormGroup,
	ReactiveFormsModule,
	Validators,
	} from '@angular/forms';

	// import interfaces
	import { Designation } from 'src/app/interfaces/designation.interface';
	import { Location } from 'src/app/interfaces/location.interface ';

	// importing material
	import { MatInputModule } from '@angular/material/input';
	import { MatSelectModule } from '@angular/material/select';
	import { MatIconModule } from '@angular/material/icon';

	import { ButtonComponent } from 'src/app/components/button/button.component';
	import { CommonService } from 'src/app/services/common.service';
	import { AdminServiceService } from '../../services/admin-service.service';
	@Component({
	selector: 'app-user-add-form',
	standalone: true,
	imports: [
		CommonModule,
		MatInputModule,
		ReactiveFormsModule,
		MatSelectModule,
		ButtonComponent,
		MatIconModule,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './user-add-form.component.html',
	styleUrls: ['./user-add-form.component.css'],
	})


	export class UserAddFormComponent implements OnChanges{
	
	hide = signal(true);
	userForm!: FormGroup;
	@Input() designations!: Designation[];
	@Input() location!: Location[];
	@Input() data !:any

	buttonClass = {
		'background-color': 'red',
	};

	constructor(
		private fb: FormBuilder,
		private commonService: CommonService,
		private adminService: AdminServiceService
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
		email: ['', [Validators.required, Validators.email]],
		address: ['', [Validators.required, Validators.maxLength(100)]],
		location: ['', Validators.required],
		userId: [{ value: '', disabled: true }, Validators.required],
		password: ['', Validators.required],
		});
	}
	

	/**oninit */
	ngOnChanges(): void {
		if(this.data){
			this.userForm.patchValue(this.data);
		}	
	}

	/**get the controll of form */
	get f() {
		return this.userForm.controls;
	}

	generateId(e: any) {
		e.preventDefault();
		let randomKey = this.generateRandomKey();
		this.userForm.get('userId')?.setValue(randomKey);
	}

	/**genarateKey */
	generateRandomKey(): string {
		const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
		const numbers = '0123456789';
		const specialChars = '!@#$%^&*()-=_+[]{}|;:,.<>?';

		/**Generate the first part (4 letters alternating case) */
		let firstPart = '';
		for (let i = 0; i < 4; i++) {
		if (i % 2 === 0) {
			firstPart += letters.charAt(Math.floor(Math.random() * letters.length));
		} else {
			firstPart += letters
			.charAt(Math.floor(Math.random() * letters.length))
			.toLowerCase();
		}
		}

		/**Generate the second part (2 numbers) */
		let secondPart = '';
		for (let i = 0; i < 2; i++) {
		secondPart += numbers.charAt(Math.floor(Math.random() * numbers.length));
		}

		/**Generating the third part (2 special characters) */
		let thirdPart = '';
		for (let i = 0; i < 2; i++) {
		thirdPart += specialChars.charAt(
			Math.floor(Math.random() * specialChars.length)
		);
		}

		/**Combine all parts to form the random key */
		const randomKey = firstPart + secondPart + thirdPart;
		return randomKey;
	}

	clickEvent(event: MouseEvent) {
		this.hide.set(!this.hide);
		event.stopPropagation();
	}

	/**onsubmit of the form */
	onSubmit() {
		if (this.userForm.valid && this.userForm.get('userId')?.value !== '') {
		const datas = {
			...this.userForm.value,
			userId: this.userForm.get('userId')?.value,
		};
		let data = {};
		const promise = new Promise((resolve, reject) => {
			data = {
			resolve,
			};
			});
			this.commonService.confirmbooleanBe.next(true)
			this.commonService.confirmPromise.next(data);

			if(!this.data){
				this.commonService.confirmMessageBe.next('Are you sure to add this employee')
				/**promise perform the task */
				promise.then(() => {
					this.adminService.addUser(datas).subscribe({
					next: (res) => {
						this.userForm.reset()
						this.commonService.loadingBooleanBe.next(false)
						this.commonService.successBooleanBe.next(true)
						this.commonService.successMessageBe.next(res.message);
					},
					error: (err) => {
						this.commonService.confirmbooleanBe.next(false)
						this.commonService.confirmMessageBe.next('')
					},
					});
				});
			} else {
				this.commonService.confirmMessageBe.next('Are you sure to update this employee')
				/**promise perform the task */
				promise.then(() => {
					this.adminService.editUser(datas,this.data._id).subscribe({
					next: (res) => {
						this.userForm.reset()
						this.commonService.loadingBooleanBe.next(false)
						this.commonService.successBooleanBe.next(true)
						this.commonService.successMessageBe.next(res.message);
					},
					error: (err) => {
						this.commonService.confirmbooleanBe.next(false)
						this.commonService.confirmMessageBe.next('')
					},
					});
				});
			}

		
		} else {
			alert('fill the fields');
		}
	}
	}
