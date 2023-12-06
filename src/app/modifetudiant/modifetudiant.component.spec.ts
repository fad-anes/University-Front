import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifetudiantComponent } from './modifetudiant.component';

describe('ModifetudiantComponent', () => {
  let component: ModifetudiantComponent;
  let fixture: ComponentFixture<ModifetudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifetudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifetudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
