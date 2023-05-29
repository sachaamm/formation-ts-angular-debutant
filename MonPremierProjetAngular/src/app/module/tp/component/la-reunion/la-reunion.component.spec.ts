import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaReunionComponent } from './la-reunion.component';

describe('LaReunionComponent', () => {
  let component: LaReunionComponent;
  let fixture: ComponentFixture<LaReunionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaReunionComponent]
    });
    fixture = TestBed.createComponent(LaReunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
