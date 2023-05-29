import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExempleIoOutputComponent } from './exemple-io-output.component';

describe('ExempleIoOutputComponent', () => {
  let component: ExempleIoOutputComponent;
  let fixture: ComponentFixture<ExempleIoOutputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExempleIoOutputComponent]
    });
    fixture = TestBed.createComponent(ExempleIoOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
