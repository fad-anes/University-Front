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
    return this.http.get<Bloc[]>(this.BlocAdminUrl+"retrieve-all-blocs");
  }

  public save( bloc: Bloc): Observable<Bloc> {
    
    return this.http.post<Bloc>(this.BlocAdminUrl+"add-bloc", bloc,this.httpOptions);
  }

  
  updateBloc(idbloc: number, value: any): Observable<Object> {
    return this.http.put(this.BlocAdminUrl+`update-bloc/${idbloc}`, value);
  }

  getBloc(idbloc: number): Observable<Object> {
    return this.http.get(`${this.BlocAdminUrl}retrieve-bloc/${idbloc}`);
  }
  deleteBloc(idbloc:number):Observable<Object>{
    return this.http.delete(this.BlocAdminUrl+`remove-bloc/${idbloc}`);
  }
  
  affecterChambreABloc(numeroChambre: number, nombloc: string): Observable<any> {
    const url = `${this.BlocAdminUrl}affecterChambres/${numeroChambre}/${nombloc}`;
    return this.http.put(url, {});
  }


  compareBlocs(): Observable<Map<string, string>> {
    const url = `${this.BlocAdminUrl}compare-blocs`;
    return this.http.get<Map<string, string>>(url);
  }

 
}

