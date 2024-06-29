import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { CommonService } from 'src/app/services/common.service';
import { AdminServiceService } from '../../modules/admin/services/admin-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-data',
  standalone: true,
  imports: [CommonModule,ButtonComponent],
  templateUrl: './single-data.component.html',
  styleUrls: ['./single-data.component.css']
})
export class SingleDataComponent {

  /**data from parent */
  @Input() data:any
  @Input() title:any
  @Input() admin:any

  constructor (
    private commonService:CommonService,
    private adminService:AdminServiceService,
	private router:Router
  ) {}

  /**delete user */
  deleteUser(id:any){
      this.commonService.confirmMessageBe.next('Are you confirm to delete This user')
      this.commonService.confirmbooleanBe.next(true)
      let data ={}
        const promise = new Promise ((resolve,reject)=>{
            data={
            resolve
            }
        })
      this.commonService.confirmPromise.next(data)
    /**promise perform the Task */
      promise.then(()=>{  
            this.adminService.deleteUser(id).subscribe({
            next:(res)=>{
                this.commonService.loadingBooleanBe.next(false)
                this.commonService.successMessageBe.next('User Deleted Successfully')
                this.commonService.successBooleanBe.next(true)
            },
            error:(err)=>{
                console.log(err);
                
            }
            })
      })
  }

  editUser(id:any){
	this.router.navigate(['/admin/add-users'],{queryParams:{id:id}})
  }

}
