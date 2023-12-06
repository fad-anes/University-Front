import { Component,OnInit } from '@angular/core';
import {foyer} from "../Model/foyer";
import {foyerservice} from "../Service/foyerservice";
import {Userservice} from "../Service/Userservice";
import {universityservice} from "../Service/universityservice";
import { MatDialog } from '@angular/material/dialog';
import { AjoutfoyerComponent } from '../ajoutfoyer/ajoutfoyer.component';
import { ModifierfoyerComponent } from '../modifierfoyer/modifierfoyer.component';

@Component({
  selector: 'app-foyer',
  templateUrl: './foyer.component.html',
  styleUrls: ['./foyer.component.css']
})
export class FoyerComponent implements OnInit{
  foyers!: foyer[];
  isLoading:boolean=true;
  role!:any;
  hasaccess!:boolean;
  email!:any;
  nomuniver!:string
  constructor(private foyerservice: foyerservice,private dialogRef : MatDialog,private universityservice:universityservice,private Userservice: Userservice ) { }
  ngOnInit(): void {
    this.role =window.sessionStorage.getItem('role');
    if(this.role=="SUPERADMIN"){this.hasaccess=true;}
    else{this.hasaccess=false;}
    this.getall();
  }
  getall() {
    
    this.foyerservice.listefoyer().subscribe(foyers => {
      this.isLoading = false;
      if (foyers && foyers.length > 0) {
        this.foyers = foyers;
      }
    });
    if(!this.hasaccess){
      this.email=window.sessionStorage.getItem('email');
      this.Userservice.rechercherParEmail(this.email).subscribe(us => {
        if (us) {
          
          this.nomuniver = us.university.nomuniverste;
          this.universityservice.listeUniversitys().subscribe(universitys => {
            this.isLoading = false;
           
            if (universitys && universitys.length > 0) {
              for(let i=0;i<universitys.length;i++){
                if(universitys[i].nomuniverste!=this.nomuniver){
                  this.foyers=  this.foyers.filter(foyer => (foyer.nomfoyer !=universitys[i].foyer.nomfoyer) );   
            }}}
            
          });
        }
      });
      }
        }
  goToAjout(){
    this.dialogRef.open(AjoutfoyerComponent);
  }
  goToModifier(u:foyer){
    this.dialogRef.open(ModifierfoyerComponent,{data:{u}});
  }
  archive(id:number){
    this.foyerservice.archiver(id).subscribe(us =>{
      location.reload();
      if(us){
        console.log(us)
      }
    },(error =>{
      if(error.status==400){
        console.log(error)
  }
  
  }))}
}
