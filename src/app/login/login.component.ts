import { Component, TemplateRef, ViewChild  } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Userservice} from '../Service/Userservice';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  message: string = '';
  email!: string;
  password!: string;
  signinForm: FormGroup;
  isLoading: boolean = false;
  role!:any;

  @ViewChild('secondDialog', {static: true}) secondDialog!: TemplateRef<any>;
  constructor(private Userservice: Userservice, private router: Router,
              private dialog: MatDialog, public dialogRef: MatDialog,private formBuilder: FormBuilder
  ) { this.signinForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });}

  openDialogWithoutRef() {
    this.dialog.open(this.secondDialog);
  }

  onSubmit(templateRef: TemplateRef<any>) : void{
    const email = this.signinForm.get('email')?.value;
      const password = this.signinForm.get('password')?.value;
      if (!email || !password ) {
        this.message = 'Oups ! Vous avez oublié de saisir votre e-mail et/ou votre mot de passe!';

      this.dialog.open(templateRef);
      setTimeout(() => {
        this.dialog.closeAll();

      }, 4000); 
      return;
    } if (!email.includes('@') || !email.includes('.')) {
      this.message = " L'adresse e-mail n'est pas valide.";
      this.dialog.open(templateRef);
      setTimeout(() => {
        this.dialog.closeAll();
      }, 3000); 
      return;
    }
    this.isLoading = true;
      this.Userservice.login(email,password).subscribe((data) => {
       
        if(data){
          this.isLoading = false;
          this.role =window.sessionStorage.getItem('email');
          if (data.role=="ADMIN"||data.role=="SUPERADMIN"){
            this.router.navigate(['/Admin']);
    
          }
          else {
            this.router.navigate(['/etudiant']);
          }
        }
  
  
      },
        error => {
          this.isLoading = false;
          if(error.status==404){
            this.message = "Il n'y a pas de compte avec cet email";
  
          this.dialog.open(templateRef);
          setTimeout(() => {
            this.dialog.closeAll();
  
          }, 4000); 
          return;}
          else if(error.status==400){
            this.message = 'Mot de passe incorrect';
  
            this.dialog.open(templateRef);
            setTimeout(() => {
              this.dialog.closeAll();
            }, 4000); 
            return;}
            else if(error.status==403){
              this.message = "Vous n'avez pas d'accès merci de contacter l'administrateur";
    
              this.dialog.open(templateRef);
              setTimeout(() => {
                this.dialog.closeAll();
              }, 4000);
              return;
    
          }
          else{
            this.message = "Problème de serveur, veuillez essayer ultérieurement.";

        this.dialog.open(templateRef);
        setTimeout(() => {
          this.dialog.closeAll();

        }, 4000); 
        return;}
          
        }
      );
   

  }
}
