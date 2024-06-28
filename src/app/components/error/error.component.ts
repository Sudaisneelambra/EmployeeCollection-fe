import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-error',
  standalone:true,
  imports:[],
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit{

  message:any
  constructor(private commonService:CommonService, private router:Router) {}
  
  ngOnInit(): void {
    this.commonService.errorMessageBe.subscribe((value)=>{
      this.message=value
    })
  }

  okey(){
    this.commonService.errorBooleanBe.next(false)
    this.commonService.errorMessageBe.next('')
    this.router.navigate(['/'])
  }

}
