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
  email!: string;
  university!: string;
  signinForm: FormGroup;
  isLoading: boolean = true;
  role!:any;
  user=new user();
  token!:any;

  @ViewChild('secondDialog', {static: true}) secondDialog!: TemplateRef<any>;
  constructor(private Userservice: Userservice, 
              private dialog: MatDialog, public dialogRef: MatDialog,private formBuilder: FormBuilder
  ) { this.signinForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]]
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
     
      if (!email) {
        this.message = 'Oups ! Vous avez oublié de saisir votre e-mail !';

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
    this.user.email=email;
    console.log( this.user)
      this.Userservice.edituser(this.user).subscribe((data) => {
       
        if(data){
          this.isLoading = false;
          this.Userservice.logout();
        }
  
  
      },
        error => {
          this.isLoading = false;
          if(error.status==404){
            this.message = "Il n'y a une errur avec votre compte";
  
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
