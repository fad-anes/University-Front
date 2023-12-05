import { Component, OnInit } from '@angular/core';
import { ChambreService } from 'src/app/Services/ChambreService/chambre.service';
import { Chambre } from 'src/app/models/Chambre';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TypeChambre } from 'src/app/models/TypeChambre';



@Component({
  selector: 'app-add-chambre',
  templateUrl: './add-chambre.component.html',
  styleUrls: ['./add-chambre.component.css']
})
export class AddChambreComponent implements OnInit {

  chambre: Chambre = new Chambre();
  chambreTypes = Object.values(TypeChambre);

  constructor(
    private chambreservice: ChambreService,
    private _routerAdd: Router,
    private _activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    const { idchambre, ...chambreWithoutId } = this.ChambreForm.value;
    
    this.chambreservice.save(chambreWithoutId).subscribe(
      (data) => {
        console.log('response', data);
        this._routerAdd.navigateByUrl('Chambre');
      }
    );
  }

  
  ChambreForm: FormGroup = this.fb.group({
    numeroChambre: ['', [Validators.required, Validators.minLength(1)]],
    typec: ['', [Validators.required, Validators.min(1)]]
  });

  
  get numeroChambre() { return this.ChambreForm.get('numeroChambre'); }
  get typec() { return this.ChambreForm.get('typec'); }
  
}
