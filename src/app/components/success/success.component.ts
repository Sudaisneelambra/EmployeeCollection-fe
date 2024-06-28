import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-success',
  standalone:true,
  imports:[],
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit{

  message:any

  constructor(private commonservice:CommonService) {}

  ngOnInit(): void {
    this.commonservice.successMessageBe.subscribe(value=>{
      this.message=value
    })
  }
  
  Done(){
    this.commonservice.successBooleanBe.next(false)
    this.commonservice.successMessageBe.next('')
  }
}
