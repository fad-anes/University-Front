import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierfoyerComponent } from './modifierfoyer.component';

describe('ModifierfoyerComponent', () => {
  let component: ModifierfoyerComponent;
  let fixture: ComponentFixture<ModifierfoyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierfoyerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierfoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
