import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../services/admin-service.service';
import { CommonService } from 'src/app/services/common.service';
import { Designation } from 'src/app/interfaces/designation.interface';
import { Location } from 'src/app/interfaces/location.interface ';

@Component({
selector: 'app-users-list',
templateUrl: './users-list.component.html',
styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {

userData:any
designations !:Designation[]
location !:Location[]
filteredUsers: any[]=[];

filterForm={
	location:'',
	designation:''
}

constructor(
	private adminServices: AdminServiceService,
	private commonService:CommonService
) {this.filteredUsers = [];}

ngOnInit(): void {
	this.getUsersData();
	this.getDesignation()
	this.getLocation()

}

/**giting user Details */
getUsersData() {
	this.adminServices.getUsers().subscribe({
	next: (res) => {
		this.commonService.loadingBooleanBe.next(false)
		this.userData=res.data
		this.filteredUsers = this.userData;
	},
	error: (err) => {
		console.log(err); 
	},
	});
}


/**getting designation details */
getDesignation(){
	this.adminServices.getDesignation().subscribe({
	next: (res) => { 
		this.commonService.loadingBooleanBe.next(false)     
		this.designations = res?.data;
	},
	error: (err) => {
		console.log(err);
	},
	});
}

/**geting location for filter */
getLocation(){
	this.adminServices.getLocation().subscribe({
	next: (res) => {    
		this.commonService.loadingBooleanBe.next(false)      
		this.location = res?.data;        
	},
	error: (err) => {
		console.log(err);
	},
	});
}

/**filter applying */
applyFilter() {  
	const locationName = this.filterForm.location;
	const designationName = this.filterForm.designation;
	if (!locationName && !designationName) {
	this.filteredUsers = this.userData;  
	} else {
	this.filteredUsers = this.userData.filter((user:any) => {
		let locationMatch = true;
		let designationMatch = true;

		if (locationName) {
		locationMatch = user.location === locationName;
		}

		if (designationName) {
		designationMatch = user.designation === designationName;
		}

		return locationMatch && designationMatch;
	});
	}
}

/**reset the filter */
reset(){
	this.filterForm.designation=''
	this.filterForm.location=''
	this.applyFilter()
}
}
