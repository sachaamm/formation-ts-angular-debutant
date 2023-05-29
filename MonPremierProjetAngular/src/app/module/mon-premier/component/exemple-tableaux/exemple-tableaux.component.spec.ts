import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExempleTableauxComponent } from './exemple-tableaux.component';

describe('ExempleTableauxComponent', () => {
  let component: ExempleTableauxComponent;
  let fixture: ComponentFixture<ExempleTableauxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExempleTableauxComponent]
    });
    fixture = TestBed.createComponent(ExempleTableauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
