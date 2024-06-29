import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {

  @Input() data:any

  constructor(
    private router:Router
  ) {}

  goToSingle(id:any){
    this.router.navigate(['/admin/single-details', id])
  }

}
