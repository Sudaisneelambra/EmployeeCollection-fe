import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutes } from './admin.routing';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

/**declerations */
import { AdminHomeComponent } from './pages/admin-home.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { AddDesignationComponent } from './pages/add-designation/add-designation.component';
import { AddUsersComponent } from './pages/add-users/add-users.component';
import { AddLocationComponent } from './pages/add-location/add-location.component';
import { SingleUserDetailsComponent } from './pages/single-user-details/single-user-details.component';
import { DeletedUsersComponent } from './pages/deleted-users/deleted-users.component';

/**imported components */
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { DesignationFormComponent } from './components/designation-form/designation-form.component';
import { UserAddFormComponent } from './components/user-add-form/user-add-form.component';
import { LocationFormComponent } from './components/location-form/location-form.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { SingleDataComponent } from '../../components/single-data/single-data.component';
import { ButtonComponent } from 'src/app/components/button/button.component';


import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AdminHomeComponent,
    UsersListComponent,
    AddDesignationComponent,
    AddUsersComponent,
    AddLocationComponent,
    SingleUserDetailsComponent,
    DeletedUsersComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutes,
    NavbarComponent,
    DesignationFormComponent,
    UserAddFormComponent,
    LocationFormComponent,
    HttpClientModule,
    UserCardComponent,
    SingleDataComponent,
    ButtonComponent,
    MatInputModule,
    MatSelectModule,
    FormsModule
  ]
})
export class AdminModule { }
