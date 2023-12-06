import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../Models/user';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders  } from '@angular/common/http';



@Injectable({
    providedIn: 'root',
  })
  export class Userservice {
    users!: user[];
    loggedUser!: string;
    roles!: string;
    token! : any;
   
    constructor(private router: Router,private http : HttpClient  ) {}

    login(email: string, password: string) {
        const url = 'http://localhost:8000/User/signin'; 
        return this.http.post<any>(url, { email, password }).pipe(
            map(response => {
              
                const token = response.token;
                    if (token) {
                        sessionStorage.setItem('currentUser', token);
                        sessionStorage.setItem('password', password);
                        sessionStorage.setItem('role', response.role);
                       
                    }
                return response;
            })
        );
    }
    
    getToken():string {
        this.token = window.sessionStorage.getItem('currentUser')
       return this.token;
    }

    register(user: user): Observable<any> {
        const url = 'http://localhost:8000/User/register'; 
        let jwt = this.getToken();
        jwt = "Bearer " + jwt;
        let httpHeaders = new HttpHeaders({"Authorization": jwt})
        return this.http.post<any>(url, user, { headers: httpHeaders });
      }

  }