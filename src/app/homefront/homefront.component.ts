import { Component,OnInit } from '@angular/core';
import {Userservice} from '../Service/Userservice';

@Component({
  selector: 'app-homefront',
  templateUrl: './homefront.component.html',
  styleUrls: ['./homefront.component.css']
})
export class HomefrontComponent implements OnInit{
  constructor(private Userservice: Userservice){}
islogeedin!:boolean;
token!:any;
  logout(){
    this.Userservice.logout();
  }
  ngOnInit(): void {
    this.token =window.sessionStorage.getItem('email');
    if(this.token) {this.islogeedin=true;}
    else {this.islogeedin=false;}
  }
}
