import { Component, DoCheck, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-confirm',
  standalone: true,
  imports: [],
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css'],
})
export class ConfirmComponent implements OnInit {

/**variable decleration*/
  message!: string;
  orderingData: any;

/**constructor injection services */
  constructor(private commonService: CommonService) {}

 /** ngOnInit triggered on mouting Time*/ 
    ngOnInit() {
        this.commonService.confirmMessageBe.subscribe((value) => {
            this.message = value;
        });

        this.commonService.confirmPromise.subscribe((value) => {
            this.orderingData = value;
        });
    }

  

/** cancell the confirm Modal*/
    cancellation() {
        this.commonService.confirmbooleanBe.next(false);
        this.commonService.confirmMessageBe.next('');
    }

/**confirm the modal */
    confirm() {
        this.commonService.confirmbooleanBe.next(false);
        this.commonService.confirmMessageBe.next('');
        this.orderingData?.resolve();
    }
}
