import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleServiceEmetteurComponent } from './example-service-emetteur.component';

describe('ExampleServiceEmetteurComponent', () => {
  let component: ExampleServiceEmetteurComponent;
  let fixture: ComponentFixture<ExampleServiceEmetteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleServiceEmetteurComponent]
    });
    fixture = TestBed.createComponent(ExampleServiceEmetteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
