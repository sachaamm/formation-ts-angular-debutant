import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleServiceComponent } from './example-service.component';

describe('ExampleServiceComponent', () => {
  let component: ExampleServiceComponent;
  let fixture: ComponentFixture<ExampleServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleServiceComponent]
    });
    fixture = TestBed.createComponent(ExampleServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
