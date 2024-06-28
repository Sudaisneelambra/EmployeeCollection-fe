import { Component, OnInit } from '@angular/core';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'EmployeeCollection-fe';

  confirmBoolean!:boolean
  loadingBoolean!:boolean
  successBoolean!:boolean
  errorboolean!:boolean

  constructor(private commonService:CommonService){}

  ngOnInit(): void {
      this.commonService.confirmbooleanBe.subscribe((val:boolean)=>{
        this.confirmBoolean=val
      })

      this.commonService.loadingBooleanBe.subscribe((val:boolean)=>{
        this.loadingBoolean=val
      })

      this.commonService.successBooleanBe.subscribe((val:boolean)=>{
        this.successBoolean=val
      })

      this.commonService.errorBooleanBe.subscribe((val:boolean)=>{
        this.errorboolean=val
      })
  }
}