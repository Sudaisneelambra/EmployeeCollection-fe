import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../services/admin-service.service';

// import iterface
import { Designation } from 'src/app/interfaces/designation.interface';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit{

  designations !:Designation[]

  constructor(
    private adminService: AdminServiceService
  ){}

  ngOnInit(): void {
      this.getDesignation()
  }

  getDesignation() {
    this.adminService.getDesignation().subscribe({
      next: (res) => {        
        this.designations = res?.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
