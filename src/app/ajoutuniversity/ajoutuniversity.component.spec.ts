import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutuniversityComponent } from './ajoutuniversity.component';

describe('AjoutuniversityComponent', () => {
  let component: AjoutuniversityComponent;
  let fixture: ComponentFixture<AjoutuniversityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutuniversityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutuniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
