import { Injectable } from '@angular/core';
import { Bloc } from '../../models/Bloc';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlocService {
  
  private BlocAdminUrl: string;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {
    this.BlocAdminUrl=environment.baseUrl+"bloc/";
  }

  public retrieveAllBlocs(): Observable<Bloc[]> {
    let jwt = window.sessionStorage.getItem('currentUser');
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({"Authorization": jwt})
    return this.http.get<Bloc[]>(this.BlocAdminUrl+"retrieve-all-blocs",{ headers:httpHeaders });
  }

  public save( bloc: Bloc): Observable<Bloc> {
    let jwt = window.sessionStorage.getItem('currentUser');
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({"Authorization": jwt})
    return this.http.post<Bloc>(this.BlocAdminUrl+"add-bloc", bloc,{ headers:httpHeaders });
  }

  
  updateBloc(idbloc: number, value: any): Observable<Object> {
    let jwt = window.sessionStorage.getItem('currentUser');
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({"Authorization": jwt})
    return this.http.put(this.BlocAdminUrl+`update-bloc/${idbloc}`, value,{ headers:httpHeaders });
  }

  getBloc(idbloc: number): Observable<Object> {
    let jwt = window.sessionStorage.getItem('currentUser');
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({"Authorization": jwt})
    return this.http.get(`${this.BlocAdminUrl}retrieve-bloc/${idbloc}`,{ headers:httpHeaders });
  }
  deleteBloc(idbloc:number):Observable<Object>{
    let jwt = window.sessionStorage.getItem('currentUser');
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({"Authorization": jwt})
    return this.http.delete(this.BlocAdminUrl+`remove-bloc/${idbloc}`,{ headers:httpHeaders });
  }
  
  affecterChambreABloc(numeroChambre: number, nombloc: string): Observable<any> {
    let jwt = window.sessionStorage.getItem('currentUser');
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({"Authorization": jwt})
    const url = `${this.BlocAdminUrl}affecterChambres/${numeroChambre}/${nombloc}`;
    return this.http.put(url,null,{ headers:httpHeaders });
  }


  compareBlocs(): Observable<Map<string, string>> {
    let jwt = window.sessionStorage.getItem('currentUser');
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({"Authorization": jwt})
    const url = `${this.BlocAdminUrl}compare-blocs`;
    return this.http.get<Map<string, string>>(url,{ headers:httpHeaders });
  }

 
}

