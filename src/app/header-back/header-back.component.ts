import { Component } from '@angular/core';
import {Userservice} from '../Service/Userservice';
@Component({
  selector: 'app-header-back',
  templateUrl: './header-back.component.html',
  styleUrls: ['./header-back.component.css']
})
export class HeaderBackComponent {
  constructor(private Userservice: Userservice){}

  logout(){
    this.Userservice.logout();
  }
}
