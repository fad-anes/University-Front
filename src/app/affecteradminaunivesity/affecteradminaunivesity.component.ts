import { Component,OnInit,TemplateRef, ViewChild,Inject  } from '@angular/core';
import {user} from "../Model/user";
import {Userservice} from "../Service/Userservice";
import {university} from "../Model/university";
import {universityservice} from "../Service/universityservice";
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-affecteradminaunivesity',
  templateUrl: './affecteradminaunivesity.component.html',
  styleUrls: ['./affecteradminaunivesity.component.css']
})
export class AffecteradminaunivesityComponent implements OnInit{
  universitys!: university[];
  isLoading:boolean=true;
  signinForm: FormGroup;
  message: string = '';
  @ViewChild('secondDialog', {static: true}) secondDialog!: TemplateRef<any>;
  constructor(private Userservice: Userservice,private dialogRef : MatDialog,private universityservice :universityservice ,private formBuilder: FormBuilder,@Inject(MAT_DIALOG_DATA) public data: any) { 
    this.signinForm = this.formBuilder.group({
      nomuniversity: ['', [Validators.required]]
    });
  }
  gettall() {
    this.universityservice.listeUniversitys().subscribe(universitys => {
      this.isLoading = false;
      if (universitys && universitys.length > 0) {
        this.universitys = universitys;
      }});
    }
    ngOnInit(): void {
      this.gettall();
      
         this.isLoading=false;
         
     }
     closePopup(){
       this.dialogRef.closeAll();
     }

     onSubmit(templateRef: TemplateRef<any>) : void{
      const nomuniversity = this.signinForm.get('nomuniversity')?.value;
     
      if (!nomuniversity ) {
        this.message = "Oups ! Vous avez oublié de saisir le nom  du l'universté!";
  
      this.dialogRef.open(templateRef);
      setTimeout(() => {
        this.dialogRef.closeAll();
  
      }, 4000); 
      return;
    }
   
    this.isLoading = true;
      this.Userservice.giveaccess(this.data.idu,nomuniversity).subscribe((data) => {
     
      if(data){
        this.isLoading = false;
        this.closePopup();
        location.reload();
      }
  
  
      },
        error => {
          this.isLoading = false;
          if(error.status==404){
            this.message = "user n'est pas disponible et/ou université n'est pas disponible ";
  
          this.dialogRef.open(templateRef);
          setTimeout(() => {
            this.dialogRef.closeAll();
  
          }, 4000); 
          return;}
          else if(error.status==400){
            this.message = "Oups, il y a une erreur dans vos informations.";
  
            this.dialogRef.open(templateRef);
            setTimeout(() => {
              this.dialogRef.closeAll();
            }, 4000); 
            return;}
          else{
            this.message = "Problème de serveur, veuillez essayer ultérieurement.";
  
        this.dialogRef.open(templateRef);
        setTimeout(() => {
          this.dialogRef.closeAll();
  
        }, 4000); 
        return;}
          
        }
      );
   
    }
}
