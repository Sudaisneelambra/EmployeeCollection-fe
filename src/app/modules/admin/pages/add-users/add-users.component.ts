import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../services/admin-service.service';

// import iterface
import { Designation } from 'src/app/interfaces/designation.interface';
import { Location } from 'src/app/interfaces/location.interface ';
import { CommonService } from 'src/app/services/common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit{

  designations !:Designation[]
  location !:Location[]
  id:any
  data:any

  constructor(
		private adminService: AdminServiceService,
		private commonService:CommonService,
    private route:ActivatedRoute
  ){}

  ngOnInit(): void {
      this.getDesignation()
      this.getLocation()

      this.route.queryParams.subscribe((val)=>{
          this.id=val['id']
          if(this.id){
            this.getSingleUser(this.id)
          }
      })
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

  getSingleUser(id:any){
    this.commonService.getsingleUser(id).subscribe({
      next:(res)=>{
        this.commonService.loadingBooleanBe.next(false)
        this.data= res.data
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}
