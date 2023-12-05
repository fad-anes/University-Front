import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutfoyerComponent } from './ajoutfoyer.component';

describe('AjoutfoyerComponent', () => {
  let component: AjoutfoyerComponent;
  let fixture: ComponentFixture<AjoutfoyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutfoyerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutfoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
