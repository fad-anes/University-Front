import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareBlocsComponent } from './compare-blocs.component';

describe('CompareBlocsComponent', () => {
  let component: CompareBlocsComponent;
  let fixture: ComponentFixture<CompareBlocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareBlocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompareBlocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
