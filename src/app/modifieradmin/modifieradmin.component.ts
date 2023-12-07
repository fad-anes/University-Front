import { Component, TemplateRef, ViewChild,OnInit } from '@angular/core';
import {user} from "../Model/user";
import {Userservice} from "../Service/Userservice";
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-modifieradmin',
  templateUrl: './modifieradmin.component.html',
  styleUrls: ['./modifieradmin.component.css']
})
export class ModifieradminComponent implements OnInit{
  message: string = '';
  message1: string = '';
  message2: string = '';
  email!: string;
  university!: string;
  signinForm: FormGroup;
  isLoading: boolean = true;
  role!:any;
  user=new user();
  token!:any;
  secondsRemaining: number = 10;
  secondsRemainingstring!:string;

  @ViewChild('secondDialog', {static: true}) secondDialog!: TemplateRef<any>;
  constructor(private Userservice: Userservice, 
              private dialog: MatDialog, public dialogRef: MatDialog,private formBuilder: FormBuilder
  ) { this.signinForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    confirmpassword: ['', [Validators.required]]
  });}
  ngOnInit(): void {
   
    this.token =window.sessionStorage.getItem('email');
    this.findUserByEmail();
    this.isLoading=false;
  }
  findUserByEmail() {
    this.Userservice.rechercherParEmail(this.token).subscribe(us => {
      if (us) {
       
        this.email = us.email;
        if(us.university){
        this.university = us.university.nomuniverste;}
        this.user = us;
        console.log(this.user)
        this.isLoading=false;
      }
    });
  }
  onSubmit(templateRef: TemplateRef<any>) : void{
    const email = this.signinForm.get('email')?.value;
    const password = this.signinForm.get('password')?.value;
    const confirmpassword = this.signinForm.get('confirmpassword')?.value;
     
      if (!email ||!password ||!confirmpassword) {
        this.message = 'Oups ! Vous avez oublié de saisir votre e-mail et/ou Votre Mot de passe !';

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
    if (password!=confirmpassword) {
      this.message = 'vous devez confirmer votre Mot de passe.';
      this.dialog.open(templateRef);
      setTimeout(() => {
        this.dialog.closeAll();
      }, 3000); 
      return;
    }
    this.isLoading = true;
    this.user.email=email;
    this.user.password=password;
      this.Userservice.edituser(this.user).subscribe((data) => {
       
        if(data){
          this.isLoading = false;
          this.message = "Votre compte a été modifié";
          this.message1 = ""+"Votre nouveau email : " + email;
          this.message2 = ""+"Votre nouveau mot de passe : " + password;
        
          const dialogRef = this.dialog.open(templateRef);
        
          
          const interval = setInterval(() => {
            this.secondsRemainingstring=""+this.secondsRemaining +""+" secondes avant la déconnexion";
            this.secondsRemaining--;
            if (this.secondsRemaining === 0) {
              clearInterval(interval);
              dialogRef.close(); 
              this.Userservice.logout(); 
            }
          }, 1000);}
  
  
      },
        error => {
          this.isLoading = false;
          if(error.status==404){
            this.message = "Il n'y a une errer avec votre compte";
  
          this.dialog.open(templateRef);
          setTimeout(() => {
            this.dialog.closeAll();
  
          }, 4000); 
          return;}
          else if(error.status==400){
            this.message = 'email erroner';
  
            this.dialog.open(templateRef);
            setTimeout(() => {
              this.dialog.closeAll();
            }, 4000); 
            return;}
            else if(error.status==302){
              this.message = 'email existant';
    
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
