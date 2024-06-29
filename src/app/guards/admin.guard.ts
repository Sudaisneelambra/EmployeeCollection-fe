import {
    CanActivate,
    Router,
  } from '@angular/router';
  import { Injectable } from '@angular/core';
import { CommonService } from '../services/common.service';
  
  @Injectable({
    providedIn: 'root',
  })
  export class AdminGuard implements CanActivate {
    
    constructor( private router: Router,private commonService:CommonService) {}
  
    canActivate(): boolean {
        const token = this.commonService.decodetoken()        
        if( token && token?.isAdmin ){
            return true
        }else if (token && !token?.isAdmin){
            this.router.navigate(['/user'])
        } else if(!token){
            this.router.navigate(['/'])
        }
     return false
    }
  }