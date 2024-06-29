import { Component } from '@angular/core';
import { RouterLink } from 'src/app/interfaces/nav-lnks.interface';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {

  /**navLinks for nav bar */
  navLinks:RouterLink[]=[
    {
      name:'Add Designation',
      Link:'/admin/add-designation'
    },
    {
      name:'Add User',
      Link:'/admin/add-users'
    },
    {
      name:'Add Location',
      Link:'/admin/add-locations'
    },
    {
      name:'Deleted Users',
      Link:'/admin/deleted-users'
    }
  ]

}
