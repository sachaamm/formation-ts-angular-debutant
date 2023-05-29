import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExempleRoutingParamComponent } from './exemple-routing-param.component';

describe('ExempleRoutingParamComponent', () => {
  let component: ExempleRoutingParamComponent;
  let fixture: ComponentFixture<ExempleRoutingParamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExempleRoutingParamComponent]
    });
    fixture = TestBed.createComponent(ExempleRoutingParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
