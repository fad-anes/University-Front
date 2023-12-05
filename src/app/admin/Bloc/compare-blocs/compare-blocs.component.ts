import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { BlocService } from 'src/app/Services/BlocService/bloc.service';

@Component({
  selector: 'app-compare-blocs',
  templateUrl: './compare-blocs.component.html',
  styleUrls: ['./compare-blocs.component.css']
})
export class CompareBlocsComponent implements OnInit{
  blocStatistics: Map<string, string> | null = null;

  constructor(private blocService: BlocService) {}

  ngOnInit(): void {
    this.compareBlocs();
   
  }

  compareBlocs(): void {
    this.blocService.compareBlocs().subscribe(
      (data) => {
        this.blocStatistics = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des statistiques de comparaison des blocs', error);
      }
  );
  }
}
