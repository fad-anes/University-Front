import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetChambresComponent } from './get-chambres.component';

describe('GetChambresComponent', () => {
  let component: GetChambresComponent;
  let fixture: ComponentFixture<GetChambresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetChambresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetChambresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
