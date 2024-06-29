import { Component, HostListener, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from 'src/app/interfaces/nav-lnks.interface';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  /**nav links comes from parent */
  @Input() navlinks!:RouterLink[]

  /**sidebar boolean values */
  bool: boolean = false;
  showSidebar: boolean = false;

  constructor(private router:Router) {}

  ngOnInit(): void {
        this.checkScreenWidth()
  }

  showSidebarfn(){
        this.bool=!this.bool
  }

  /**observe the screensize */
  @HostListener('window:resize', ['$event'])
    onResize(event: any) {
            this.checkScreenWidth();
    }

/**check screen Width */
  checkScreenWidth() {
        const screenWidth = window.innerWidth;
        this.showSidebar =  screenWidth <= 750;
  }

/**Logout */
  logOut(){
        const confirm = window.confirm('are you sure logout')
            if(confirm){
                localStorage.clear()
                this.router.navigate(['/'])
            }
  }

}
