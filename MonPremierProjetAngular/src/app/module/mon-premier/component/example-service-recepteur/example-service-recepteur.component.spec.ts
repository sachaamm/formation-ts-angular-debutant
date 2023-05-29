import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleServiceRecepteurComponent } from './example-service-recepteur.component';

describe('ExampleServiceRecepteurComponent', () => {
  let component: ExampleServiceRecepteurComponent;
  let fixture: ComponentFixture<ExampleServiceRecepteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleServiceRecepteurComponent]
    });
    fixture = TestBed.createComponent(ExampleServiceRecepteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
