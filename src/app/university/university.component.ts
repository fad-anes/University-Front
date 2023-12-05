import { Component,OnInit } from '@angular/core';
import {university} from "../Model/university";
import {universityservice} from "../Service/universityservice";
import {Userservice} from "../Service/Userservice";
import { MatDialog } from '@angular/material/dialog';
import { AjoutuniversityComponent } from '../ajoutuniversity/ajoutuniversity.component';
import { ModifieruniversityComponent } from '../modifieruniversity/modifieruniversity.component';
import { AffecterUniversityToFoyerComponent } from '../affecter-university-to-foyer/affecter-university-to-foyer.component';


@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit{
  university!: university;
  universitys!: university[];
  nomuniver!:string
  role!:any;
  isLoading:boolean=true;
  hasaccess!:boolean;
  email!:any;
  constructor(private universityservice: universityservice,private dialogRef : MatDialog,private Userservice: Userservice ) { }

  ngOnInit(): void {
    this.role =window.sessionStorage.getItem('role');
    if(this.role=="SUPERADMIN"){this.hasaccess=true;}
    else{this.hasaccess=false;}
   
    this.getall()
  }
  getall() {
    if(this.hasaccess){
    this.universityservice.listeUniversitys().subscribe(universitys => {
      this.isLoading = false;
     
      if (universitys && universitys.length > 0) {
        this.universitys = universitys;
        
      }
      
    });
  }else{
this.email=window.sessionStorage.getItem('email');
this.Userservice.rechercherParEmail(this.email).subscribe(us => {
  if (us) {
    
    this.nomuniver = us.university.nomuniverste;
    this.universityservice.listeUniversitys().subscribe(universitys => {
      this.isLoading = false;
     
      if (universitys && universitys.length > 0) {
        this.universitys = universitys.filter(university => university.nomuniverste ==this.nomuniver );   
      }
      
    });
  }
});
}
  }


  goToAjout(){
    this.dialogRef.open(AjoutuniversityComponent);
  }
  goToModifier(u:university){
    this.dialogRef.open(ModifieruniversityComponent,{data:{u}});
  }
  goToAffecter(nom:string){
    this.dialogRef.open(AffecterUniversityToFoyerComponent,{data:{nom}});
  }
  Delete(id:number){
  
    this.universityservice.Deleteuniversity(id).subscribe(us =>{
      location.reload();
      if(us){
        console.log(us)
    
       

      }
    },(error =>{
      if(error.status==400){
        console.log(error)
      
    
    
  }
  
  }))}
  desafecter(idf:number,idu:number){
    this.universityservice.desaffecter(idf,idu).subscribe(us =>{
      location.reload();
      if(us){
        console.log(us)
    
       

      }
    },(error =>{
     
        console.log(error)
      
    
    
  
  
  }))
  }
}
