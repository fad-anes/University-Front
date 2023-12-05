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
    return this.http.get<Chambre[]>(this.ChambreAdminUrl+"retrieve-all-chambres");
  }

  public save( chambre: Chambre): Observable<Chambre> {
    
    return this.http.post<Chambre>(this.ChambreAdminUrl+"add-chambre", chambre,this.httpOptions);
  }

  
  updateChambre(idchambre: number, value: any): Observable<Object> {
    return this.http.put(this.ChambreAdminUrl+`update-chambre/${idchambre}`, value);
  }

  getChambre(idchambre: number): Observable<Object> {
    return this.http.get(`${this.ChambreAdminUrl}retrieve-chambre/${idchambre}`);
  }
  
  deleteChambre(idchambre:number):Observable<Object>{
    return this.http.delete(this.ChambreAdminUrl+`remove-chambre/${idchambre}`);
  }
  nbChambreParTypeEtBloc(typec: string, idbloc: number): Observable<number> {
    const url = `${this.ChambreAdminUrl}nb-chambre-par-type-et-bloc?typec=${typec}&idbloc=${idbloc}`;
    return this.http.get<number>(url);
  }

  getBlocs(): Observable<Bloc[]> {
    return this.blocService.retrieveAllBlocs();
  }

  filterChambresByBloc(nombloc: string): Observable<Chambre[]> {
    const url = `${this.ChambreAdminUrl}filter-chambres-bloc?nombloc=${nombloc}`;
    return this.http.get<Chambre[]>(url);
  }

}
