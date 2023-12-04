import { Component, TemplateRef, ViewChild ,OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Userservice} from '../Service/Userservice';
import {user} from '../Model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  message: string = '';
  email!: string;
  password!: string;
  name!: string;
  user = new user();
  signinForm: FormGroup;
  names: any[] = [];
  isLoading: boolean = true;
  @ViewChild('secondDialog', {static: true}) secondDialog!: TemplateRef<any>;
  constructor(private Userservice: Userservice, private router: Router,
              private dialog: MatDialog, public dialogRef: MatDialog,private formBuilder: FormBuilder
  ) { this.signinForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    name: ['', Validators.required]
  });}

  openDialogWithoutRef() {
    this.dialog.open(this.secondDialog);
  }
  ngOnInit(): void {
    this.Userservice.namesofuniversity().subscribe(
      data => {
        this.isLoading = false;
        this.names = data;
        this.signinForm.get('name')?.setValue(this.names[0]);
       
      },
      error => {
        if(error){
          this.isLoading = false;
        this.message = "Une erreur s\'est produite";
  
          this.dialog.open(this.secondDialog);
          setTimeout(() => {
            this.dialog.closeAll();
  
          }, 4000); 
          return;}}
      
    );
  }

  onSubmit(templateRef: TemplateRef<any>) : void{
    const email = this.signinForm.get('email')?.value;
      const password = this.signinForm.get('password')?.value;
      const name = this.signinForm.get('name')?.value;
      if (!email || !password || !name) {
        this.message = 'Oups ! Vous avez oublié de saisir votre e-mail et/ou votre mot de passe et/ou le nom de votre université!';

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
    if (password.length < 8) {
      this.message = '8 caractères requis pour le mot de passe.';
      this.dialog.open(templateRef);
      setTimeout(() => {
        this.dialog.closeAll();
      }, 3000); 
      return;
    }
    this.user.email=email;
    this.user.password=password;
    this.isLoading = true;
      this.Userservice.register(this.user,name).subscribe((data) => {
        this.isLoading = false;
     
        if(data){
        
        this.message = "Bienvenue à My University. Vous devrez recevoir un e-mail de notre administrateur pour vous donner l'accès. Merci de votre compréhension.";
  
        this.dialog.open(templateRef);
        setTimeout(() => {
          this.dialog.closeAll();
        }, 6000);
        return;}
  
  
      },
        error => {
          this.isLoading = false;
          if(error.status==302){
            this.message = "Il y a déjà un compte associé à cet e-mail. Veuillez vérifier votre e-mail ou contacter notre administrateur";
  
          this.dialog.open(templateRef);
          setTimeout(() => {
            this.dialog.closeAll();
  
          }, 4000); 
          return;}
          else if(error.status==400){
            this.message = "Oups, il y a une erreur dans vos informations.";
  
            this.dialog.open(templateRef);
            setTimeout(() => {
              this.dialog.closeAll();
            }, 4000); 
            return;}
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
