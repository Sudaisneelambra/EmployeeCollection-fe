import { Component, DoCheck, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-confirm',
  standalone:true,
  imports:[],
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit{
  
  message!:string
  orderingData:any

  constructor(private commonService:CommonService) {}

  ngOnInit() {
      this.commonService.confirmMessageBe.subscribe((value)=>{
        this.message=value
      })

      this.commonService.confirmPromise.subscribe((value)=>{
        this.orderingData=value        
      })
  }


  cancellation(){
    this.commonService.confirmbooleanBe.next(false)
    this.commonService.confirmMessageBe.next('')
  }

  confirm(){
    this.orderingData?.resolve() 
  }
}
