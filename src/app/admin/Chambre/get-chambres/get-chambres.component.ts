import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ChambreService } from 'src/app/Services/ChambreService/chambre.service';
import { Chambre } from 'src/app/models/Chambre';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { TypeChambre } from 'src/app/models/TypeChambre';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationDialogComponent } from '../../delete-confirmation-dialog/delete-confirmation-dialog.component';
import { BlocService } from 'src/app/Services/BlocService/bloc.service';
import { Bloc } from 'src/app/models/Bloc';

@Component({
  selector: 'app-get-chambres',
  templateUrl: './get-chambres.component.html',
  styleUrls: ['./get-chambres.component.css']
})
export class GetChambresComponent implements OnInit {
  chambres: Chambre[] = [];

  blocs: Bloc[] = [];

  selectedBloc: string | null = null  ;


 
  dataSource = new MatTableDataSource<Chambre>(this.chambres);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private chambreService: ChambreService,private blocService: BlocService,private dialog: MatDialog,
    @Inject(DOCUMENT) private doc: Document
  ) {}

 
  selectedChambre: Chambre | null = null;

getImageUrlForType(type: TypeChambre): string {
  switch (type) {
    case TypeChambre.SIMPLE:
      return '../../../../assets/img/chsimple.jpg';
    case TypeChambre.DOUBLE:
      return '../../../../assets/img/chdouble.jpg';
    case TypeChambre.TRIPLE:
      return '../../../../assets/img/chtripple.jpg';
    default:
      return 'path/to/default-image.jpg';
  }
}

  ngOnInit(): void {
    this.chambreService.retrieveAllChambres().subscribe((chambres: Chambre[]) => {
      console.log(chambres);
      this.chambres = chambres;

     
      this.dataSource.data = this.chambres;

      
      this.dataSource.paginator = this.paginator;
    });

    this.blocService.retrieveAllBlocs().subscribe((blocs: Bloc[]) => {
      this.blocs = blocs;
    });


  }

 

  refresh(): void {
    
    if (this.doc && this.doc.defaultView) {
      this.doc.defaultView.location.reload();
    }
  }

  
  Supprimer(idchambre: number): void {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      data: {},
    });
  
    dialogRef.afterClosed().subscribe((result: any) => { 
      if (result) {
        this.chambreService.deleteChambre(idchambre).subscribe(() => {
          console.log(`Chambre with ID ${idchambre} deleted successfully.`);
          this.chambres = this.chambres.filter((chambre) => chambre.idchambre !== idchambre);
          this.dataSource.data = this.chambres; 
          this.dataSource.paginator = this.paginator; 
        });
      }
    });
  }
  
  affecterChambresABloc(chambre: Chambre): void {
    if (this.selectedBloc) {
      this.blocService.affecterChambreABloc(chambre.numeroChambre, this.selectedBloc)
        .subscribe(
          (response) => {
            console.log('Chambre affected to Bloc successfully', response);
            
            chambre.affectedBloc = this.selectedBloc ?? undefined;
          },
          (error) => {
            console.error('Error affecting Chambre to Bloc', error);
           
          }
        );
    }
  }


  filterChambresByBloc(): void {
    if (this.selectedBloc) {
      this.chambreService.filterChambresByBloc(this.selectedBloc).subscribe(
        (chambres) => {
          
          console.log(chambres);
         
          this.chambres = chambres;
        },
        (error) => {
          console.error('Error fetching filtered chambres', error);
        }
      );
    }
  }

  
}
