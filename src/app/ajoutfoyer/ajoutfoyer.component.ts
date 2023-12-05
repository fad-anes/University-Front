import { Component,TemplateRef, ViewChild } from '@angular/core';
import {foyer} from "../Model/foyer";
import {foyerservice} from "../Service/foyerservice";
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-ajoutfoyer',
  templateUrl: './ajoutfoyer.component.html',
  styleUrls: ['./ajoutfoyer.component.css']
})
export class AjoutfoyerComponent {
  foyer = new foyer();
  isLoading:boolean=false;
  signinForm: FormGroup;
  message: string = '';
  @ViewChild('secondDialog', {static: true}) secondDialog!: TemplateRef<any>;
  constructor(private foyerservice: foyerservice,private dialogRef : MatDialog ,private formBuilder: FormBuilder) { 
    this.signinForm = this.formBuilder.group({
      nomfoyer: ['', [Validators.required]],
      capacitefoyer: ['', Validators.required]
    });
  }
  closePopup(){
    this.dialogRef.closeAll();
  }
  openDialogWithoutRef() {
    this.dialogRef.open(this.secondDialog);
  }
  onSubmit(templateRef: TemplateRef<any>) : void{
    const nomfoyer = this.signinForm.get('nomfoyer')?.value;
      const capacitefoyer = this.signinForm.get('capacitefoyer')?.value;
     
      if (!nomfoyer || !capacitefoyer ) {
        this.message = "Oups ! Vous avez oublié de saisir le nom du foyer et/ou la capacité !";

      this.dialogRef.open(templateRef);
      setTimeout(() => {
        this.dialogRef.closeAll();

      }, 4000); 
      return;
    }
    this.foyer.nomfoyer=nomfoyer;
    this.foyer.capacitefoyer=capacitefoyer;
    this.isLoading = true;
      this.foyerservice.Ajoutefoyer(this.foyer).subscribe((data) => {
     
      if(data){
        this.isLoading = false;
        this.closePopup();
        location.reload();
      }
  
  
      },
        error => {
          this.isLoading = false;
          if(error.status==302){
            this.message = "Il y a déjà une foyer avec cette id";
  
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
