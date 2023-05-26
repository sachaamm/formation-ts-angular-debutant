import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonQuatriemeComponent } from './mon-quatrieme.component';

describe('MonQuatriemeComponent', () => {
  let component: MonQuatriemeComponent;
  let fixture: ComponentFixture<MonQuatriemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonQuatriemeComponent]
    });
    fixture = TestBed.createComponent(MonQuatriemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
