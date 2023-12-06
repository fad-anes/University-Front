import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Userservice } from './Userservice';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MatDialog } from '@angular/material/dialog';
import { ExpirationDialogComponent } from '../expiration-dialog/expiration-dialog.component';
import * as jwt_decode from 'jwt-decode';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor( private router: Router, private dialog: MatDialog,private Userservice: Userservice) {}
  private helper = new JwtHelperService();
  userData: any;
  canActivate(): boolean {
    let token: any = window.sessionStorage.getItem('currentUser');
    let decodedToken = this.helper.decodeToken(token);
    let expirationDate = this.helper.getTokenExpirationDate(token);
    const currentDate = new Date();
    
    if (token != null) {
      if (expirationDate != null) {
        let timeToExpiration = expirationDate.getTime() - currentDate.getTime();
        setTimeout(() => {
          if (expirationDate &&new Date() > expirationDate) {
            const dialogRef = this.dialog.open(ExpirationDialogComponent, {
              disableClose: true,
              autoFocus: true
            });
  
            dialogRef.afterClosed().subscribe(result => {
              if (result === 'logout') {
                this.Userservice.logout();
              } else if (result === 'regenerate') {
                
                let email = window.sessionStorage.getItem('email');
                let password: any = window.sessionStorage.getItem('password');
                  console.log(window.sessionStorage.getItem('currentUser'))
                  password=String(password);
                  email=String(email);
                  window.sessionStorage.removeItem('currentUser');
                this.Userservice.login(email, password).subscribe(data =>{
                  token = window.sessionStorage.getItem('currentUser');
                  expirationDate = this.helper.getTokenExpirationDate(token);
                })
                
                // Mettre à jour expirationDate après la régénération du token
                expirationDate = this.helper.getTokenExpirationDate(token);
              }
            });
          }
        }, timeToExpiration);
  
        return true;
      }
      
      return false;
    } else {
      this.Userservice.logout();
      return false;
    }
  }
  
  
}