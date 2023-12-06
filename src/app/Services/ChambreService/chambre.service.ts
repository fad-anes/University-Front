import { Injectable } from '@angular/core';
import { Chambre } from '../../models/Chambre';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Bloc } from '../../models/Bloc';
import { BlocService } from '../BlocService/bloc.service';

@Injectable({
  providedIn: 'root'
})
export class ChambreService {

  private ChambreAdminUrl: string;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };


  constructor(private http: HttpClient,private blocService: BlocService) {this.ChambreAdminUrl=environment.baseUrl+"chambre/" }

  public retrieveAllChambres(): Observable<Chambre[]> {
    let jwt = window.sessionStorage.getItem('currentUser');
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({"Authorization": jwt})
    return this.http.get<Chambre[]>(this.ChambreAdminUrl+"retrieve-all-chambres",{ headers:httpHeaders });
  }

  public save( chambre: Chambre): Observable<Chambre> {
    let jwt = window.sessionStorage.getItem('currentUser');
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({"Authorization": jwt})
    
    return this.http.post<Chambre>(this.ChambreAdminUrl+"add-chambre", chambre,{ headers:httpHeaders });
  }

  
  updateChambre(idchambre: number, value: any): Observable<Object> {
    let jwt = window.sessionStorage.getItem('currentUser');
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({"Authorization": jwt})
    return this.http.put(this.ChambreAdminUrl+`update-chambre/${idchambre}`, value,{ headers:httpHeaders });
  }

  getChambre(idchambre: number): Observable<Object> {
    let jwt = window.sessionStorage.getItem('currentUser');
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({"Authorization": jwt})
    return this.http.get(`${this.ChambreAdminUrl}retrieve-chambre/${idchambre}`,{ headers:httpHeaders });
  }
  
  deleteChambre(idchambre:number):Observable<Object>{
    let jwt = window.sessionStorage.getItem('currentUser');
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({"Authorization": jwt})
    return this.http.delete(this.ChambreAdminUrl+`remove-chambre/${idchambre}`,{ headers:httpHeaders });
  }
  nbChambreParTypeEtBloc(typec: string, idbloc: number): Observable<number> {
    let jwt = window.sessionStorage.getItem('currentUser');
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({"Authorization": jwt})
    const url = `${this.ChambreAdminUrl}nb-chambre-par-type-et-bloc?typec=${typec}&idbloc=${idbloc}`;
    return this.http.get<number>(url,{ headers:httpHeaders });
  }

  getBlocs(): Observable<Bloc[]> {
    return this.blocService.retrieveAllBlocs();
  }

  filterChambresByBloc(nombloc: string): Observable<Chambre[]> {
    let jwt = window.sessionStorage.getItem('currentUser');
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({"Authorization": jwt})
    const url = `${this.ChambreAdminUrl}filter-chambres-bloc?nombloc=${nombloc}`;
    return this.http.get<Chambre[]>(url,{ headers:httpHeaders });
  }

}
