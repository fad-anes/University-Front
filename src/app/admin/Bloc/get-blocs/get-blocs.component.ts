import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BlocService } from 'src/app/Services/BlocService/bloc.service';
import { Bloc } from 'src/app/models/Bloc';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationDialogComponent } from '../../delete-confirmation-dialog/delete-confirmation-dialog.component';

@Component({
  selector: 'app-get-blocs',
  templateUrl: './get-blocs.component.html',
  styleUrls: ['./get-blocs.component.css'],
  animations: [trigger('transformPanel', [
    state('open', style({
      height: '100px', 
      opacity: 1,
      backgroundColor: 'yellow'
    })),
    state('closed', style({
      height: '0px',
      opacity: 0,
      backgroundColor: 'red'
    })),
    transition('open => closed', [
      animate('1s') 
    ]),
    transition('closed => open', [
      animate('0.5s') 
    ]),
  ]),
],
})
export class GetBlocsComponent implements OnInit {
  blocs: Bloc[] = [];

  dataSource = new MatTableDataSource<Bloc>(this.blocs);

 
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private blocService: BlocService,private dialog: MatDialog,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  ngOnInit(): void {
    this.blocService.retrieveAllBlocs().subscribe((blocs: Bloc[]) => {
      console.log(blocs);
      this.blocs = blocs;

      this.dataSource.data = this.blocs;

      this.dataSource.paginator = this.paginator;
    });
  }

  refresh(): void {
    if (this.doc && this.doc.defaultView) {
      this.doc.defaultView.location.reload();
    }
  }

 
  Supprimer(idbloc: number): void {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      data: {  },
    });
  
    dialogRef.afterClosed().subscribe((result: any) => { 
      if (result) {
        this.blocService.deleteBloc(idbloc).subscribe(() => {
          console.log(`Bloc with ID ${idbloc} deleted successfully.`);
          this.blocs = this.blocs.filter((bloc) => bloc.idbloc !== idbloc);
          this.dataSource.data = this.blocs; 
          this.dataSource.paginator = this.paginator; 
        });
      }
    });
  }

}
