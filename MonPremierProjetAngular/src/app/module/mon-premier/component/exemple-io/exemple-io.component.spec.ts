import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExempleIoComponent } from './exemple-io.component';

describe('ExempleIoComponent', () => {
  let component: ExempleIoComponent;
  let fixture: ComponentFixture<ExempleIoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExempleIoComponent]
    });
    fixture = TestBed.createComponent(ExempleIoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
