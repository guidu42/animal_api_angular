import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorpionsComponent } from './morpions.component';

describe('MorpionsComponent', () => {
  let component: MorpionsComponent;
  let fixture: ComponentFixture<MorpionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorpionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MorpionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
