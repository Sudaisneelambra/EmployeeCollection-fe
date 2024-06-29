import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

/**componets */
import { AdminHomeComponent } from "./pages/admin-home.component";
import { UsersListComponent } from "./pages/users-list/users-list.component";
import { AddDesignationComponent } from "./pages/add-designation/add-designation.component";
import { AddUsersComponent } from "./pages/add-users/add-users.component";
import { AddLocationComponent } from "./pages/add-location/add-location.component";
import { SingleUserDetailsComponent } from "./pages/single-user-details/single-user-details.component";
import { DeletedUsersComponent } from "./pages/deleted-users/deleted-users.component";

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
            },
            {
                path:'add-locations',
                component:AddLocationComponent
            },
            {
                path:'single-details/:id',
                component:SingleUserDetailsComponent
            },
            {
                path:'deleted-users',
                component:DeletedUsersComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class AdminRoutes {}