import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecteradminaunivesityComponent } from './affecteradminaunivesity.component';

describe('AffecteradminaunivesityComponent', () => {
  let component: AffecteradminaunivesityComponent;
  let fixture: ComponentFixture<AffecteradminaunivesityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffecteradminaunivesityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffecteradminaunivesityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
