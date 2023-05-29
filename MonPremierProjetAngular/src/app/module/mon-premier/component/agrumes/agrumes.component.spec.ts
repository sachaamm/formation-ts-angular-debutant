import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrumesComponent } from './agrumes.component';

describe('AgrumesComponent', () => {
  let component: AgrumesComponent;
  let fixture: ComponentFixture<AgrumesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgrumesComponent]
    });
    fixture = TestBed.createComponent(AgrumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
