import { Component,OnInit,TemplateRef, ViewChild,Inject  } from '@angular/core';
import {foyer} from "../Model/foyer";
import {foyerservice} from "../Service/foyerservice";
import {university} from "../Model/university";
import {universityservice} from "../Service/universityservice";
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-affecter-university-to-foyer',
  templateUrl: './affecter-university-to-foyer.component.html',
  styleUrls: ['./affecter-university-to-foyer.component.css']
})
export class AffecterUniversityToFoyerComponent implements OnInit{
  foyers: any[] = [];
  isLoading:boolean=true;
  signinForm: FormGroup;
  message: string = '';
  @ViewChild('secondDialog', {static: true}) secondDialog!: TemplateRef<any>;
  constructor(private foyerservice: foyerservice,private dialogRef : MatDialog,private universityservice :universityservice ,private formBuilder: FormBuilder,@Inject(MAT_DIALOG_DATA) public data: any) { 
    this.signinForm = this.formBuilder.group({
      nomfoyer: ['', [Validators.required]]
    });
  }
  ngOnInit(): void {
   this.gettall();
   
      this.isLoading=false;
      
  }
  closePopup(){
    this.dialogRef.closeAll();
  }
  gettall() {
    this.foyerservice.listefoyer().subscribe(foyerss => {
      this.isLoading = false;
      if (foyerss && foyerss.length > 0) {
        this.universityservice.listeUniversitys().subscribe(universitys => {
          let filteredFoyers = [...foyerss]; // Créez une copie pour éviter de modifier la liste brute
        
          for (let i = 0; i < universitys.length; i++) {
            if (universitys[i]?.foyer?.nomfoyer) {
              filteredFoyers = filteredFoyers.filter(foyer => foyer.nomfoyer != universitys[i].foyer.nomfoyer);
            }
          }
        
          this.foyers = filteredFoyers;
        });
      }
    });
  }
  
  onSubmit(templateRef: TemplateRef<any>) : void{
    const nomfoyer = this.signinForm.get('nomfoyer')?.value;
   
    if (!nomfoyer ) {
      this.message = "Oups ! Vous avez oublié de saisir le nom  du foyer!";

    this.dialogRef.open(templateRef);
    setTimeout(() => {
      this.dialogRef.closeAll();

    }, 4000); 
    return;
  }
 
  this.isLoading = true;
    this.universityservice.affecter(nomfoyer,this.data.nom).subscribe((data) => {
   
    if(data){
      this.isLoading = false;
      this.closePopup();
      location.reload();
    }


    },
      error => {
        this.isLoading = false;
        if(error.status==404){
          this.message = "foyer n'est pas disponible et/ou université n'est pas disponible ";

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

