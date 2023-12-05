import { Component,OnInit,TemplateRef, ViewChild,Inject  } from '@angular/core';
import {user} from "../Model/user";
import {Userservice} from "../Service/Userservice";
import {university} from "../Model/university";
import {universityservice} from "../Service/universityservice";
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-ajoutetudiant',
  templateUrl: './ajoutetudiant.component.html',
  styleUrls: ['./ajoutetudiant.component.css']
})
export class AjoutetudiantComponent {

}
