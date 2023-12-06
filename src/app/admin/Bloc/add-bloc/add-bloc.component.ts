import { Component, OnInit } from '@angular/core';
import { BlocService } from 'src/app/Services/BlocService/bloc.service';
import { Bloc } from 'src/app/models/Bloc';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-bloc',
  templateUrl: './add-bloc.component.html',
  styleUrls: ['./add-bloc.component.css']
})
export class AddBlocComponent implements OnInit {

  bloc: Bloc = new Bloc();

  constructor(
    private blocservice: BlocService,
    private _routerAdd: Router,
    private _activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    const { idbloc, ...blocWithoutId } = this.BlocForm.value;
    
    this.blocservice.save(blocWithoutId).subscribe(
      (data) => {
        console.log('response', data);
        this._routerAdd.navigateByUrl('Bloc');
      }
    );
  }

  // Declare the BlocForm property with form controls and validators
  BlocForm: FormGroup = this.fb.group({
    nombloc: ['', [Validators.required, Validators.minLength(1)]],
    capacitebloc: ['', [Validators.required, Validators.min(1)]]
  });

  // Getter methods for easy access in the HTML template
  get nombloc() { return this.BlocForm.get('nombloc'); }
  get capacitebloc() { return this.BlocForm.get('capacitebloc'); }
}
