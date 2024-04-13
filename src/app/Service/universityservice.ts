import { Injectable } from '@angular/core';
import { university } from '../Model/university';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
  export class universityservice {

   
    constructor(private http : HttpClient  ) {}
Ajouteuniversity(university:university): Observable<university>{
    let jwt = window.sessionStorage.getItem('currentUser');
    const url =`http://localhost:8002/University/AddUniversty`;
    let httpHeaders = new HttpHeaders()
    .set('Authorization', 'Bearer ' + jwt);
    return this.http.post<university>(url,university,{headers:httpHeaders});
    }
listeUniversitys(): Observable<university[]>{
    let jwt = window.sessionStorage.getItem('currentUser');
    const url ='http://localhost:8002/University/AllUniversty';
    let httpHeaders = new HttpHeaders()
    .set('Authorization', 'Bearer ' + jwt);
    return this.http.get<university[]>(url,{headers:httpHeaders});
    }
edituniversity(university: university): Observable<any>{
    const url = `http://localhost:8002/University/UpdateUniversty`;
    let jwt = window.sessionStorage.getItem('currentUser');
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({"Authorization": jwt})
    return this.http.put(url,university,{ headers:httpHeaders });
    }
Deleteuniversity(id: number): Observable<any>{
    const url = `http://localhost:8002/University/DeleteUniversty/${id}`;
    let jwt = window.sessionStorage.getItem('currentUser');
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({"Authorization": jwt})
    return this.http.delete<any>(url, { headers: httpHeaders });
}
oneuniversity(id: number):Observable<university> {
    const url = `http://localhost:8002/University/OneUniversty/${id}`;
    let jwt = window.sessionStorage.getItem('currentUser');
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<university>(url,{headers:httpHeaders});
    }
affecter(id: number,name:string): Observable<any>{
    const url = `http://localhost:8002/University/affecterFoyerAUniversite/${id}/${name}`;
    let jwt = window.sessionStorage.getItem('currentUser');
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({"Authorization": jwt})
    return this.http.put(url,null,{ headers:httpHeaders });
    }
desaffecter(idf: number,idu:number): Observable<any>{
    const url = `http://localhost:8002/University/desaffecterFoyerAUniversite/${idf}/${idu}`;
    let jwt = window.sessionStorage.getItem('currentUser');
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({"Authorization": jwt})
    return this.http.put(url,null,{ headers:httpHeaders });
    }
}
