import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonSixiemeComponent } from './mon-sixieme.component';

describe('MonSixiemeComponent', () => {
  let component: MonSixiemeComponent;
  let fixture: ComponentFixture<MonSixiemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonSixiemeComponent]
    });
    fixture = TestBed.createComponent(MonSixiemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
