import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component:LoginComponent
  },
  {
    path: 'user',
    loadChildren:()=> import('./modules/user/user.module').then((e)=> e.UserModule)
  },
  {
    path: 'admin',
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
