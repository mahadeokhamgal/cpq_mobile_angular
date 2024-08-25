import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent {
  showFiller: boolean = false;

  constructor(private router: Router){

  }
  
  // navigate(url: string){

  // }
  navigateTo(url: string) {
    this.router.navigate(['/'+ url]);
  }
}
