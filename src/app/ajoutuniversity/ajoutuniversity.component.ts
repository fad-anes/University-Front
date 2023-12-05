import { Component,TemplateRef, ViewChild } from '@angular/core';
import {university} from "../Model/university";
import {universityservice} from "../Service/universityservice";
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-ajoutuniversity',
  templateUrl: './ajoutuniversity.component.html',
  styleUrls: ['./ajoutuniversity.component.css']
})
export class AjoutuniversityComponent {
  university = new university();
  universitys!: university[];
  role!:any;
  isLoading:boolean=false;
  signinForm: FormGroup;
  message: string = '';
  @ViewChild('secondDialog', {static: true}) secondDialog!: TemplateRef<any>;
  constructor(private universityservice: universityservice,private dialogRef : MatDialog ,private formBuilder: FormBuilder) { 
    this.signinForm = this.formBuilder.group({
      nomuniverste: ['', [Validators.required]],
      adresse: ['', Validators.required]
    });
  }
  openDialogWithoutRef() {
    this.dialogRef.open(this.secondDialog);
  }
  onSubmit(templateRef: TemplateRef<any>) : void{
    const nomuniverste = this.signinForm.get('nomuniverste')?.value;
      const adresse = this.signinForm.get('adresse')?.value;
     
      if (!nomuniverste || !adresse ) {
        this.message = "Oups ! Vous avez oublié de saisir le nom de l'univerité et/ou l'adresse!";

      this.dialogRef.open(templateRef);
      setTimeout(() => {
        this.dialogRef.closeAll();

      }, 4000); 
      return;
    }
    this.university.adresse=adresse;
    this.university.nomuniverste=nomuniverste;
    this.isLoading = true;
      this.universityservice.Ajouteuniversity(this.university).subscribe((data) => {
     
      if(data){
        this.isLoading = false;
        this.closePopup();
        location.reload();
      }
  
  
      },
        error => {
          this.isLoading = false;
          if(error.status==302){
            this.message = "Il y a déjà une université avec cette nom";
  
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




  
  closePopup(){
    this.dialogRef.closeAll();
  }
}
