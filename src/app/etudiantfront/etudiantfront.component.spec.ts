import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantfrontComponent } from './etudiantfront.component';

describe('EtudiantfrontComponent', () => {
  let component: EtudiantfrontComponent;
  let fixture: ComponentFixture<EtudiantfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudiantfrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtudiantfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
