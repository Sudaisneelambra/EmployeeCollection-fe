import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
selector: 'app-not-found',
templateUrl: './not-found.component.html',
styleUrls: ['./not-found.component.css'],
standalone:true,
imports:[CommonModule]
})
export class NotFoundComponent {



constructor(private location:Location, private router :Router){}

back(){
	this.router.navigate(['/'])
}
}
