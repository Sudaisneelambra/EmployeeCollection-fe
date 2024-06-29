import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './pages/user-home.component';
import { UserRoutes } from './user.routing';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { SingleDataComponent } from 'src/app/components/single-data/single-data.component';



@NgModule({
  declarations: [
    UserHomeComponent
  ],
  imports: [
    CommonModule,
    UserRoutes,
    NavbarComponent,
    SingleDataComponent
  ]
})
export class UserModule { }
