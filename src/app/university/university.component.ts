import { Component,OnInit } from '@angular/core';
import {university} from "../Model/university";
import {universityservice} from "../Service/universityservice";
import { MatDialog } from '@angular/material/dialog';
import { AjoutuniversityComponent } from '../ajoutuniversity/ajoutuniversity.component';
import { ModifieruniversityComponent } from '../modifieruniversity/modifieruniversity.component';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit{
  university!: university;
  universitys!: university[];
  role!:any;
  isLoading:boolean=true;
  constructor(private universityservice: universityservice,private dialogRef : MatDialog ) { }

  ngOnInit(): void {
    this.role =window.sessionStorage.getItem('role');
    this.getall()
  }
  getall() {
    this.universityservice.listeUniversitys().subscribe(universitys => {
      this.isLoading = false;
     
      if (universitys && universitys.length > 0) {
        this.universitys = universitys;
      }
    });
  }

  goToAjout(){
    this.dialogRef.open(AjoutuniversityComponent);
  }
  goToModifier(u:university){
    this.dialogRef.open(ModifieruniversityComponent,{data:{u}});
  }
  Delete(id:number){
    this.universityservice.Deleteuniversity(id);
  }
}
