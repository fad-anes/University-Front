import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChambreCountComponent } from './chambre-count.component';

describe('ChambreCountComponent', () => {
  let component: ChambreCountComponent;
  let fixture: ComponentFixture<ChambreCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChambreCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChambreCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
