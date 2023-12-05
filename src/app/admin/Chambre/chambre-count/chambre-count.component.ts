import { Component, OnInit } from '@angular/core';
import { ChambreService } from 'src/app/Services/ChambreService/chambre.service';
import { FormsModule } from '@angular/forms'; 
import { Bloc } from 'src/app/models/Bloc';

@Component({
  selector: 'app-chambre-count',
  templateUrl: './chambre-count.component.html',
  styleUrls: ['./chambre-count.component.css'],
})
export class ChambreCountComponent implements OnInit {
  selectedType: string | null = null;
  selectedBlocId: number | null = null;
  numberOfChambres: number | null = null;
  blocs: Bloc[] = [];

  constructor(private chambreService: ChambreService) {}

  ngOnInit(): void {
    // Initialize your component if needed
    this.chambreService.getBlocs().subscribe(
      (blocs) => {
        this.blocs = blocs;
      },
      (error) => {
        console.error('Error fetching blocs', error);
      }
    );
  }

  calculateNumberOfChambres(): void {
    if (this.selectedType && this.selectedBlocId !== null) {
      this.chambreService
        .nbChambreParTypeEtBloc(this.selectedType, this.selectedBlocId)
        .subscribe(
          (result) => {
            this.numberOfChambres = result;
          },
          (error) => {
            console.error('Error fetching number of chambres', error);
          }
        );
    }
  }
}
