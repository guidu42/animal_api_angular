import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllChampionListComponent } from './all-champion-list.component';

describe('AllChampionListComponent', () => {
  let component: AllChampionListComponent;
  let fixture: ComponentFixture<AllChampionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllChampionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllChampionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
