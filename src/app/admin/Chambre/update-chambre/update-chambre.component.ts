import { Component, OnInit } from '@angular/core';
import { ChambreService } from 'src/app/Services/ChambreService/chambre.service';
import { Chambre } from 'src/app/models/Chambre';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TypeChambre } from 'src/app/models/TypeChambre';
@Component({
  selector: 'app-update-chambre',
  templateUrl: './update-chambre.component.html',
  styleUrls: ['./update-chambre.component.css']
})
export class UpdateChambreComponent implements OnInit {
  chambre: Chambre = new Chambre();
  chambreTypes = Object.values(TypeChambre);
  constructor(
    private chambreservice: ChambreService,
    private _routerAdd: Router,
    private _activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    const idchambreParam = this._activatedRoute.snapshot.paramMap.get('idchambre');
    if (idchambreParam !== null) {
      const idchambre = +idchambreParam; 
      if (!isNaN(idchambre)) {
        this.chambreservice.getChambre(idchambre).subscribe((chambre: Chambre | any) => {
          this.chambre = chambre as Chambre;
          
          this.ChambreForm.patchValue({
            numeroChambre: chambre.numeroChambre,
            typec: chambre.typec
          });
        });
      } else {
        console.error('Invalid idchambre parameter:', idchambreParam);
      }
    } else {
      console.error('idchambre parameter is null or undefined.');
    }
  }
  onSubmit() {
    // Use the correct idchambre when updating
    this.chambreservice.updateChambre(this.chambre.idchambre, this.ChambreForm.value).subscribe(
      (data) => {
        console.log('response', data);
        this._routerAdd.navigateByUrl('Chambre');
      }
    );
  }
  // Declare the ChambreForm property with form controls
  ChambreForm: FormGroup = this.fb.group({
    numeroChambre: ['', Validators.required],
    typec: ['', Validators.required]
  });

}
