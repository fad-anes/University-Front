import { Component,OnInit } from '@angular/core';
import {user} from "../Model/user";
import {Userservice} from "../Service/Userservice";
@Component({
  selector: 'app-header-back',
  templateUrl: './header-back.component.html',
  styleUrls: ['./header-back.component.css']
})
export class HeaderBackComponent implements OnInit{
  constructor(private Userservice: Userservice){}
  role!:any;
  hasacees!:boolean;
  number!:number;
  strings!:any[];
  ngOnInit(): void {
    this.role =window.sessionStorage.getItem('role');
    if(this.role=="SUPERADMIN"){this.hasacees=true;}
    else {this.hasacees=false;}
    this.count();
  }
  logout(){
    this.Userservice.logout();
  }
  count(){
    this.Userservice.nombredenotification().subscribe(nb => {
      if(nb){
        this.number=nb;
      }
     });
  }
  liste(){
    this.Userservice.listeNotification().subscribe(nb => {
      if(nb){
        this.strings=nb;
      }
     });
  }
}
