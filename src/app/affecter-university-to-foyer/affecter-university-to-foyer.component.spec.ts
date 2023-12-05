import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterUniversityToFoyerComponent } from './affecter-university-to-foyer.component';

describe('AffecterUniversityToFoyerComponent', () => {
  let component: AffecterUniversityToFoyerComponent;
  let fixture: ComponentFixture<AffecterUniversityToFoyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffecterUniversityToFoyerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffecterUniversityToFoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
