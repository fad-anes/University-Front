import { Component, OnInit } from '@angular/core';
import { BlocService } from 'src/app/Services/BlocService/bloc.service';
import { Bloc } from 'src/app/models/Bloc';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-bloc',
  templateUrl: './update-bloc.component.html',
  styleUrls: ['./update-bloc.component.css']
})
export class UpdateBlocComponent implements OnInit {

  bloc: Bloc = new Bloc();

  constructor(
    private blocservice: BlocService,
    private _routerAdd: Router,
    private _activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    const idblocParam = this._activatedRoute.snapshot.paramMap.get('idbloc');
    
    if (idblocParam !== null) {
      const idbloc = +idblocParam; 
      if (!isNaN(idbloc)) {
        this.blocservice.getBloc(idbloc).subscribe((bloc: Bloc | any) => {
          this.bloc = bloc as Bloc;

          this.BlocForm.patchValue({
            nombloc: bloc.nombloc,
            capacitebloc: bloc.capacitebloc
          });
        });
      } else {
        console.error('Invalid idbloc parameter:', idblocParam);
      }
    } else {
      console.error('idbloc parameter is null or undefined.');
    }
  }
  
  onSubmit() {
    // Use the correct idbloc when updating
    this.blocservice.updateBloc(this.bloc.idbloc, this.BlocForm.value).subscribe(
      (data) => {
        console.log('response', data);
        this._routerAdd.navigateByUrl('Bloc');
      }
    );
  }

  // Declare the BlocForm property with form controls
  BlocForm: FormGroup = this.fb.group({
    nombloc: ['', Validators.required],
    capacitebloc: ['', Validators.required]
  });
}
