import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup;

constructor(private fb: FormBuilder, private commonService: CommonService, private router:Router) {
    this.loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    });
}

  get f() {
     return this.loginForm.controls;
  }

  onClick() {
    if (this.loginForm.valid) {
      this.commonService.login(this.loginForm.value).subscribe({
        next: (res) => {
          this.commonService.loadingBooleanBe.next(false)
          if(res.success){
            localStorage.setItem('token', res.token)
            const token = localStorage.getItem('token')
            console.log(token);            
              if(res?.isAdmin){
                this.router.navigate(['admin'])
              } else if(!res?.isAdmin){
                this.router.navigate(['user'])
              }
          } else {
            alert(res.message)
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      alert('Fill the fields');
    }
  }
}
