import { Component,OnInit,TemplateRef, ViewChild,Inject  } from '@angular/core';
import {foyer} from "../Model/foyer";
import {foyerservice} from "../Service/foyerservice";
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-modifierfoyer',
  templateUrl: './modifierfoyer.component.html',
  styleUrls: ['./modifierfoyer.component.css']
})
export class ModifierfoyerComponent implements OnInit{
  foyer= new foyer();
  isLoading:boolean=true;
  signinForm: FormGroup;
  message: string = '';
  @ViewChild('secondDialog', {static: true}) secondDialog!: TemplateRef<any>;
  constructor(private foyerservice: foyerservice,private dialogRef : MatDialog ,private formBuilder: FormBuilder,@Inject(MAT_DIALOG_DATA) public data: any) { 
    this.signinForm = this.formBuilder.group({
      nomfoyer: ['', [Validators.required]],
      capacitefoyer: ['', Validators.required]
    });
  }
  ngOnInit(): void {
   
    if (this.data) {
      this.isLoading=false;
      this.signinForm.patchValue({
        nomfoyer: this.data.u.nomfoyer || '', 
        capacitefoyer: this.data.u.capacitefoyer || ''
      });}
  }
  closePopup(){
    this.dialogRef.closeAll();
  }

  onSubmit(templateRef: TemplateRef<any>) : void{
    const nomfoyer = this.signinForm.get('nomfoyer')?.value;
    const capacitefoyer = this.signinForm.get('capacitefoyer')?.value;
   
    if (!nomfoyer || !capacitefoyer ) {
      this.message = "Oups ! Vous avez oublié de saisir le nom de du foyer et/ou la capacité!";

    this.dialogRef.open(templateRef);
    setTimeout(() => {
      this.dialogRef.closeAll();

    }, 4000); 
    return;
  }
  this.foyer.idfoyer=this.data.u.idfoyer;
  this.foyer.nomfoyer=nomfoyer;
  this.foyer.capacitefoyer=capacitefoyer;
  this.isLoading = true;
    this.foyerservice.editfoyer(this.foyer).subscribe((data) => {
   
    if(data){
      this.isLoading = false;
      this.closePopup();
      location.reload();
    }


    },
      error => {
        this.isLoading = false;
        if(error.status==404){
          this.message = "Il n'y a pas un foyer avec cette id";

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
