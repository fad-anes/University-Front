import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifieruniversityComponent } from './modifieruniversity.component';

describe('ModifieruniversityComponent', () => {
  let component: ModifieruniversityComponent;
  let fixture: ComponentFixture<ModifieruniversityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifieruniversityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifieruniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
