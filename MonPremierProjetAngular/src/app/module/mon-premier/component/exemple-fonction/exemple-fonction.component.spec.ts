import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExempleFonctionComponent } from './exemple-fonction.component';

describe('ExempleFonctionComponent', () => {
  let component: ExempleFonctionComponent;
  let fixture: ComponentFixture<ExempleFonctionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExempleFonctionComponent]
    });
    fixture = TestBed.createComponent(ExempleFonctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
