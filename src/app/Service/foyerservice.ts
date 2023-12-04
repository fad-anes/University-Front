import { Injectable } from '@angular/core';
import { foyer } from '../Model/foyer';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
  export class foyerservice {

   
    constructor(private http : HttpClient  ) {}
Ajoutefoyer(foyer:foyer): Observable<foyer>{
    let jwt = window.sessionStorage.getItem('currentUser');
    const url =`http://localhost:8000/Foyer/AddFoyer`;
    let httpHeaders = new HttpHeaders()
    .set('Authorization', 'Bearer ' + jwt);
    return this.http.post<foyer>(url,foyer,{headers:httpHeaders});
    }
listefoyer(): Observable<foyer[]>{
    let jwt = window.sessionStorage.getItem('currentUser');
    const url ='http://localhost:8000/Foyer/AllFoyer';
    let httpHeaders = new HttpHeaders()
    .set('Authorization', 'Bearer ' + jwt);
    return this.http.get<foyer[]>(url,{headers:httpHeaders});
    }
editfoyer(foyer: foyer): Observable<any>{
    const url = `http://localhost:8000/Foyer/UpdateFoyer`;
    let jwt = window.sessionStorage.getItem('currentUser');
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({"Authorization": jwt})
    return this.http.put(url,foyer,{ headers:httpHeaders });
    }
archiver(id: number): Observable<any>{
    const url = `http://localhost:8000/Foyer/Archiver/${id}`;
    let jwt = window.sessionStorage.getItem('currentUser');
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({"Authorization": jwt})
    return this.http.post(url,null,{ headers:httpHeaders });
    }
oneuniversity(id: number):Observable<foyer> {
    const url = `http://localhost:8000/Foyer/OneFoyer/${id}`;
    let jwt = window.sessionStorage.getItem('currentUser');
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<foyer>(url,{headers:httpHeaders});
    }

}
