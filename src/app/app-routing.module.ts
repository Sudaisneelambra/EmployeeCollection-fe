import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginGuard } from './guards/login.guard';
import { UserGuard } from './guards/user.guard';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    canActivate:[LoginGuard],
    component:LoginComponent
  },
  {
    path: 'user',
    canActivate:[UserGuard],
    loadChildren:()=> import('./modules/user/user.module').then((e)=> e.UserModule)
  },
  {
    path: 'admin',
    canActivate:[AdminGuard],
    loadChildren:()=> import('./modules/admin/admin.module').then((e)=> e.AdminModule)
  },
  {
    path: '**',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
