import { Component } from '@angular/core';
import { EtudiantService } from '../Service/etudiant';
import { Etudiant } from '../Models/etudiant';

@Component({
  selector: 'app-etudiantfront',
  templateUrl: './etudiantfront.component.html',
  styleUrls: ['./etudiantfront.component.css']
})
export class EtudiantfrontComponent {
  etudiants: Etudiant[] = [];

  constructor(private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    this.getEtudiants();
  }

  getEtudiants(): void {
    this.etudiantService.getAll()
      .subscribe(etudiants => this.etudiants = etudiants);
  }

  viewDetails(id: number): void {
  }

  editEtudiant(id: number): void {
  }
}
