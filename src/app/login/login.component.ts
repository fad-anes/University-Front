import { Component, TemplateRef, ViewChild  } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {user} from '../Models/user';
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
    }
      this.Userservice.login(email,password).subscribe((data) => {
        
     
        if(data){
        
        this.message = "Votre signin est vrai";
  
        this.dialog.open(templateRef);
        setTimeout(() => {
          this.dialog.closeAll();
        }, 4000);
        return;}
  
  
      },
        error => {
          console.log(error)
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
