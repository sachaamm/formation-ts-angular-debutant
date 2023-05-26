import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonCinquiemeComponent } from './mon-cinquieme.component';

describe('MonCinquiemeComponent', () => {
  let component: MonCinquiemeComponent;
  let fixture: ComponentFixture<MonCinquiemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonCinquiemeComponent]
    });
    fixture = TestBed.createComponent(MonCinquiemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
