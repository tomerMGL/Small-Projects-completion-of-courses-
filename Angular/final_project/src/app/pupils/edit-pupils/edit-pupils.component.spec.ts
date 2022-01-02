import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPupilsComponent } from './edit-pupils.component';

describe('EditPupilsComponent', () => {
  let component: EditPupilsComponent;
  let fixture: ComponentFixture<EditPupilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPupilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPupilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
