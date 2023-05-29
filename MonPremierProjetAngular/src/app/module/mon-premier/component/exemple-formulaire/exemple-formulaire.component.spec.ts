import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExempleFormulaireComponent } from './exemple-formulaire.component';

describe('ExempleFormulaireComponent', () => {
  let component: ExempleFormulaireComponent;
  let fixture: ComponentFixture<ExempleFormulaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExempleFormulaireComponent]
    });
    fixture = TestBed.createComponent(ExempleFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
