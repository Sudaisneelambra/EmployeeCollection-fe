import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminHomeComponent } from "./pages/admin-home.component";
import { UsersListComponent } from "./pages/users-list/users-list.component";
import { AddDesignationComponent } from "./pages/add-designation/add-designation.component";
import { AddUsersComponent } from "./pages/add-users/add-users.component";

const routes: Routes = [
    {
        path: '',
        component:AdminHomeComponent,
        children:[
            {
                path:'',
                component:UsersListComponent
            },
            {
                path:'add-designation',
                component:AddDesignationComponent
            },
            {
                path:'add-users',
                component:AddUsersComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class AdminRoutes {}