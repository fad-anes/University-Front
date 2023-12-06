import { Component,OnInit } from '@angular/core';
import {user} from "../Model/user";
import {Userservice} from "../Service/Userservice";
import { AffecteradminaunivesityComponent } from '../affecteradminaunivesity/affecteradminaunivesity.component';
import { MatDialog } from '@angular/material/dialog';
import { AjoutetudiantComponent } from '../ajoutetudiant/ajoutetudiant.component';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  isLoading: boolean = true;
  user!: user;
  users!: user[];
  role!:any;
  currentPage: number = 1;
  itemsPerPage: number = 4;
  hasaccess!:boolean;
  
  constructor(private Userservice: Userservice,private dialogRef : MatDialog ) { }
  ngOnInit(): void {
    this.role =window.sessionStorage.getItem('role');
    if(this.role=="SUPERADMIN"){this.hasaccess=true}
    else {this.hasaccess=false}
    this.getall()
  }
  getall() {
    this.Userservice.listeUsers().subscribe(users => {
      this.isLoading = false;
      if(this.role=="SUPERADMIN"){
      if (users && users.length > 0) {
        this.users = users.filter(user => ((user.userrole !== 'SUPERADMIN')&&(user.userrole !== 'ETUDIANT')));
      }}
      else{
        if (users && users.length > 0) {
          this.users = users.filter(user => ((user.userrole !== 'SUPERADMIN')&&(user.userrole !== 'ADMIN')));
        }
      }
     
    });
  }
  gotoetudiantuser(){
    this.dialogRef.open(AjoutetudiantComponent);
  }
      changeStatus(u:String){
        this.Userservice.Changestatus(u).subscribe(() => {
          location.reload();
      });}

      Supprimer(id:number){
        this.Userservice.Deleteuser(id).subscribe((aa) => {
          console.log(aa)
      },(error)=>{console.log(error)});}

      getTotalPages(): number {
        return Math.ceil(this.users?.length / this.itemsPerPage);
      }
    
      previousPage(): void {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      }
      goToAffecter(idu:number){
        this.dialogRef.open(AffecteradminaunivesityComponent,{data:{idu}});
      }
      nextPage(): void {
        const totalPages = this.getTotalPages();
        if (this.currentPage < totalPages) {
          this.currentPage++;
        }
      }
      getCurrentPageItems(): { User: user; }[] {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        const items: { User: user; }[] = this.users?.slice(startIndex, endIndex).map(user => ({ User: user }));
        return items;
      }
}
