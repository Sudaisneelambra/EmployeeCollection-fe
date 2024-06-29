import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../services/admin-service.service';

// import iterface
import { Designation } from 'src/app/interfaces/designation.interface';
import { Location } from 'src/app/interfaces/location.interface ';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit{

  designations !:Designation[]
  location !:Location[]

  constructor(
		private adminService: AdminServiceService,
		private commonService:CommonService
  ){}

  ngOnInit(): void {
      this.getDesignation()
      this.getLocation()
  }

  /**getting designation */
  getDesignation() {
    this.adminService.getDesignation().subscribe({
		next: (res) => { 
			this.commonService.loadingBooleanBe.next(false)     
			this.designations = res?.data;
		},
		error: (err) => {
			console.log(err);
		},
    });
  }

  /**getting location */
  getLocation() {
    this.adminService.getLocation().subscribe({
		next: (res) => {    
			this.commonService.loadingBooleanBe.next(false)      
			this.location = res?.data;        
		},
		error: (err) => {
			console.log(err);
		},
    });
  }
}
