import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutetudiantComponent } from './ajoutetudiant.component';

describe('AjoutetudiantComponent', () => {
  let component: AjoutetudiantComponent;
  let fixture: ComponentFixture<AjoutetudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutetudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutetudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
