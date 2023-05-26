import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAppelWebserviceComponent } from './test-appel-webservice.component';

describe('TestAppelWebserviceComponent', () => {
  let component: TestAppelWebserviceComponent;
  let fixture: ComponentFixture<TestAppelWebserviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestAppelWebserviceComponent]
    });
    fixture = TestBed.createComponent(TestAppelWebserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
