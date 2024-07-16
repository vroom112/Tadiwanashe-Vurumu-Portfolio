import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public router:Router){

  }
  onHome(){
    this.router.navigate(['./home'])
  }

  onSkills(){

  }
  onAbout(){
    this.router.navigate(['./about'])
  }
  onContact(){
    this.router.navigate(['./contact'])
  }

}
