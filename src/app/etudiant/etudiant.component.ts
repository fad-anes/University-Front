import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Userservice} from '../Service/Userservice';
import {user} from '../Model/user';
@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  user!:user;
  email!: string;
  nom!: string;
  prenom!: string;
  nomuniversity!: string;
  cin!: number;
  token!: any;
  date!:Date;
  isLoading: boolean = true;
  constructor(private Userservice: Userservice){}
  ngOnInit(): void {
   
    this.token =window.sessionStorage.getItem('email');
    this.findUserByEmail();
  }

  findUserByEmail() {
    this.Userservice.rechercherParEmail(this.token).subscribe(us => {
      if (us) {
        console.log(us)
        this.email = us.email;
        this.nom = us.etudiant.nom;
        this.prenom = us.etudiant.prenom;
        this.cin = us.etudiant.cin;
        this.nomuniversity = us.etudiant.ecole;
        this.date=us.etudiant.datenaissance;
        this.isLoading=false;
      }
    });
  }
}
