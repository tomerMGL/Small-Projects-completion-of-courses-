import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDeatilsComponent } from './show-deatils.component';

describe('ShowDeatilsComponent', () => {
  let component: ShowDeatilsComponent;
  let fixture: ComponentFixture<ShowDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDeatilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
