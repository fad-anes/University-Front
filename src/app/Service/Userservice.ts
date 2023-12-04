import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../Model/user';
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
                        sessionStorage.setItem('email', email);
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
   
    register(user: user,nom:string): Observable<any> {
        const url = `http://localhost:8000/User/register/${nom}`; 
        let jwt = this.getToken();
        jwt = "Bearer " + jwt;
        let httpHeaders = new HttpHeaders({"Authorization": jwt})
        return this.http.post<any>(url, user, { headers: httpHeaders });
    }

    namesofuniversity(): Observable<any[]>{
        let url ='http://localhost:8000/names'; 
        return this.http.get<any>(url);}
        logout() {
            this.loggedUser = undefined!;
            this.roles = undefined!;
            this.token= undefined!;
            window.sessionStorage.removeItem('currentUser');
            window.sessionStorage.removeItem('password');
            window.sessionStorage.removeItem('role');
            window.sessionStorage.removeItem('email');
            this.router.navigate(['/Home']);
        
        }

        rechercherParEmail(email: string):Observable< user> {
            const url = `http://localhost:8000/User/getUser/${email}`;
            let jwt = this.getToken();
            jwt = "Bearer "+jwt;
            let httpHeaders = new HttpHeaders({"Authorization":jwt})
            return this.http.get<user>(url,{headers:httpHeaders});
            }

            listeUsers(): Observable<user[]>{
                let jwt = window.sessionStorage.getItem('currentUser');
                const url ='http://localhost:8000/User/Users';
                let httpHeaders = new HttpHeaders()
                .set('Authorization', 'Bearer ' + jwt);
                return this.http.get<user[]>(url,{headers:httpHeaders});
            
                  }

                  listeNotification(): Observable<any>{
                    let jwt = window.sessionStorage.getItem('currentUser');
                    const url ='http://localhost:8000/notification';
                    let httpHeaders = new HttpHeaders()
                    .set('Authorization', 'Bearer ' + jwt);
                    return this.http.get<any>(url,{headers:httpHeaders});
                
                      }
                      nombredenotification(): Observable<number>{
                        let jwt = window.sessionStorage.getItem('currentUser');
                        const url ='http://localhost:8000/notificationcount';
                        let httpHeaders = new HttpHeaders()
                        .set('Authorization', 'Bearer ' + jwt);
                        return this.http.get<number>(url,{headers:httpHeaders});
                    
                          }
                          Ajoutetudiant(user:user,idet:number,iduniver:number): Observable<any>{
                            let jwt = window.sessionStorage.getItem('currentUser');
                            const url =`http://localhost:8000/User/addUser/${idet}/${iduniver}`;
                            let httpHeaders = new HttpHeaders()
                            .set('Authorization', 'Bearer ' + jwt);
                            return this.http.post<any>(url,user,{headers:httpHeaders});
                        
                              }
                              giveaccess(user:user,iduser:number,iduniver:number): Observable<any>{
                                let jwt = window.sessionStorage.getItem('currentUser');
                                const url =`http://localhost:8000/User/giveaccess/${iduniver}/${iduser}`;
                                let httpHeaders = new HttpHeaders()
                                .set('Authorization', 'Bearer ' + jwt);
                                return this.http.post<any>(url,user,{headers:httpHeaders});
                            
                                  }

                                  Changestatus(u: String) {
                                    const url = `http://localhost:8000/User/changeStatus/${u}`;
                                    let jwt = window.sessionStorage.getItem('currentUser');
                                    let httpHeaders = new HttpHeaders()
                                    .set('Authorization', 'Bearer ' + jwt);
                                    return this.http.put(url,null,{ headers:httpHeaders });
                                  }
                                  edituser(user: user): Observable<any>{
                                    const url = `http://localhost:8000/User/userUpdate`;
                                    let jwt = window.sessionStorage.getItem('currentUser');
                                    jwt = "Bearer " + jwt;
                                    let httpHeaders = new HttpHeaders({"Authorization": jwt})
                                    return this.http.put(url,user,{ headers:httpHeaders });
                                  }
                                  Deleteuser(id: number): Observable<any>{
                                    const url = `http://localhost:8000/User/deleteUser/${id}`;
                                    let jwt = window.sessionStorage.getItem('currentUser');
                                    jwt = "Bearer " + jwt;
                                    let httpHeaders = new HttpHeaders({"Authorization": jwt})
                                    return this.http.delete(url,{ headers:httpHeaders });
                                  }
        
  }