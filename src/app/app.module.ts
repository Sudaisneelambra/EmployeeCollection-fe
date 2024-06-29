import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoadingComponent } from './components/loading/loading.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmComponent } from './components/confirm/confirm.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { CommonInterceptor } from './commonInterceptor';
import { SuccessComponent } from './components/success/success.component';
import { ErrorComponent } from './components/error/error.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotFoundComponent,
    LoadingComponent,
    BrowserAnimationsModule,
    ConfirmComponent,
    LoadingComponent,
    SuccessComponent,
    ErrorComponent,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule,
    ButtonComponent
  ],
  providers: [
    {
     provide: HTTP_INTERCEPTORS,
     useClass:CommonInterceptor,
     multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
