	import { Component, OnInit } from '@angular/core';
	import { CommonService } from 'src/app/services/common.service';
	import { AdminServiceService } from '../../services/admin-service.service';

	@Component({
	selector: 'app-deleted-users',
	templateUrl: './deleted-users.component.html',
	styleUrls: ['./deleted-users.component.css'],
	})
	export class DeletedUsersComponent implements OnInit {
	deletedusers: any;

	constructor(
		private commonService: CommonService,
		private adminService: AdminServiceService
	) {}

	ngOnInit(): void {
		this.getdetedeusers();
	}

	/**get deleted Users */
	getdetedeusers() {
		this.adminService.getdeletedUsers().subscribe({
		next: (res) => {
			this.commonService.loadingBooleanBe.next(false)
			this.deletedusers = res.data;
			console.log(res);
			
		},
		error: (err) => {
			console.log(err);
		},
		});
	}
	}
