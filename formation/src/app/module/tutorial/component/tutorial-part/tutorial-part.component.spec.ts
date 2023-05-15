import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialPartComponent } from './tutorial-part.component';

describe('TutorialPartComponent', () => {
  let component: TutorialPartComponent;
  let fixture: ComponentFixture<TutorialPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialPartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
