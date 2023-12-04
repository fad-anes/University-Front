import { Component } from '@angular/core';
import {Userservice} from '../Service/Userservice';
@Component({
  selector: 'app-header-front',
  templateUrl: './header-front.component.html',
  styleUrls: ['./header-front.component.css']
})
export class HeaderFrontComponent {
  constructor(private Userservice: Userservice){}

  logout(){
    this.Userservice.logout();
  }

}
