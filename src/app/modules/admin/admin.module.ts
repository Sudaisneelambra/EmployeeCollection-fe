import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './pages/admin-home.component';
import { AdminRoutes } from './admin.routing';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { AddDesignationComponent } from './pages/add-designation/add-designation.component';
import { AddUsersComponent } from './pages/add-users/add-users.component';
import { DesignationFormComponent } from './components/designation-form/designation-form.component';
import {HttpClientModule} from '@angular/common/http'



@NgModule({
  declarations: [
    AdminHomeComponent,
    UsersListComponent,
    AddDesignationComponent,
    AddUsersComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutes,
    NavbarComponent,
    DesignationFormComponent,
    HttpClientModule
  ]
})
export class AdminModule { }
