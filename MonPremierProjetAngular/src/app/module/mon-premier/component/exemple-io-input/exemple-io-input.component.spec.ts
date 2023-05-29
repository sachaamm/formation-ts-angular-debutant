import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExempleIoInputComponent } from './exemple-io-input.component';

describe('ExempleIoInputComponent', () => {
  let component: ExempleIoInputComponent;
  let fixture: ComponentFixture<ExempleIoInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExempleIoInputComponent]
    });
    fixture = TestBed.createComponent(ExempleIoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
