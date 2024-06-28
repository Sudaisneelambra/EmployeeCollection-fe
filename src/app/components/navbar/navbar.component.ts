import { Component, HostListener, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from 'src/app/interfaces/nav-lnks.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  @Input() navlinks!:RouterLink[]
  bool: boolean = false;
  showSidebar: boolean = false;

  ngOnInit(): void {
    this.checkScreenWidth()
  }

  showSidebarfn(){
    this.bool=!this.bool
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenWidth();
  }

  checkScreenWidth() {
    const screenWidth = window.innerWidth;
    this.showSidebar =  screenWidth <= 500;
  }

}
