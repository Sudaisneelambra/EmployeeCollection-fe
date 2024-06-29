import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
selector: 'app-single-user-details',
templateUrl: './single-user-details.component.html',
styleUrls: ['./single-user-details.component.css']
})
export class SingleUserDetailsComponent implements OnInit{

id:any
singleData:any
bool:boolean=true

constructor (
	private route:ActivatedRoute,
	private commonService:CommonService
) {}

ngOnInit(): void {
	this.route.params.subscribe(params => {
		this.id = params['id'];
		if(this.id){
		this.singleDetail(this.id)
		}
	})
}

/**get single details */
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
