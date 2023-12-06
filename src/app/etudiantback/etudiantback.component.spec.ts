import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantbackComponent } from './etudiantback.component';

describe('EtudiantbackComponent', () => {
  let component: EtudiantbackComponent;
  let fixture: ComponentFixture<EtudiantbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudiantbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtudiantbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
