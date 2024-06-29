import {
    CanActivate,
    Router,
  } from '@angular/router';
  import { Injectable } from '@angular/core';
import { CommonService } from '../services/common.service';
  
  @Injectable({
    providedIn: 'root',
  })
  export class LoginGuard implements CanActivate {
    
    constructor( private router: Router,private commonService:CommonService) {}
  
    canActivate(): boolean {
        const token = this.commonService.decodetoken()        
        if( !token ){
            return true
        } else if(token && token?.isAdmin){
            this.router.navigate(['/admin'])
        } else if (token && !token?.isAdmin){
            this.router.navigate(['/user'])
        }
     return false
    }
  }