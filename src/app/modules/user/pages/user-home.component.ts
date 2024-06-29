import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
selector: 'app-user-home',
templateUrl: './user-home.component.html',
styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit{

singleData:any
bool:boolean=false
constructor (private commonService:CommonService) {}

ngOnInit(): void {
	const token = this.commonService.decodetoken()
	if(token){
		const id = token.id
		this.singleDetail(id)
	}
}

/**getting user details */
singleDetail(id:any){
	this.commonService.getsingleUser(id).subscribe({
	next:(res)=>{
		this.commonService.loadingBooleanBe.next(false)
		this.singleData = res.data     
	},
	error:(err)=>{
		console.log(err);
	}
	})
}

}
