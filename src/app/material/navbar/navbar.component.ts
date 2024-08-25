import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent {
  showFiller: boolean = false;

  constructor(){

  }
  
  navigate(url: string){

  }
}
