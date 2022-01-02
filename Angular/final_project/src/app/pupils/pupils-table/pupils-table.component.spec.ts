import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PupilsTableComponent } from './pupils-table.component';

describe('PupilsTableComponent', () => {
  let component: PupilsTableComponent;
  let fixture: ComponentFixture<PupilsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PupilsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PupilsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
