import { Component,OnInit,TemplateRef, ViewChild,Inject  } from '@angular/core';
import {university} from "../Model/university";
import {universityservice} from "../Service/universityservice";
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-modifieruniversity',
  templateUrl: './modifieruniversity.component.html',
  styleUrls: ['./modifieruniversity.component.css']
})
export class ModifieruniversityComponent implements OnInit{
  university= new university();
  universitys!: university[];
  role!:any;
  isLoading:boolean=true;
  signinForm: FormGroup;
  message: string = '';
  @ViewChild('secondDialog', {static: true}) secondDialog!: TemplateRef<any>;
  constructor(private universityservice: universityservice,private dialogRef : MatDialog ,private formBuilder: FormBuilder,@Inject(MAT_DIALOG_DATA) public data: any) { 
    this.signinForm = this.formBuilder.group({
      nomuniverste: ['', [Validators.required]],
      adresse: ['', Validators.required]
    });
  }
  openDialogWithoutRef() {
    this.dialogRef.open(this.secondDialog);
  }
  ngOnInit(): void {
   
    if (this.data) {
      this.isLoading=false;
      this.signinForm.patchValue({
        nomuniverste: this.data.u.nomuniverste || '', 
        adresse: this.data.u.adresse || ''
      });}
  }
  closePopup(){
    this.dialogRef.closeAll();
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
  this.university.iduniverste=this.data.u.iduniverste;
  this.university.adresse=adresse;
  this.university.nomuniverste=nomuniverste;
  this.isLoading = true;
    this.universityservice.edituniversity(this.university).subscribe((data) => {
   
    if(data){
      this.isLoading = false;
      this.closePopup();
      location.reload();
    }


    },
      error => {
        this.isLoading = false;
        if(error.status==404){
          this.message = "Il n'y a pas une université avec cette nom";

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
