import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonTroisiemeComposantComponent } from './mon-troisieme-composant.component';

describe('MonTroisiemeComposantComponent', () => {
  let component: MonTroisiemeComposantComponent;
  let fixture: ComponentFixture<MonTroisiemeComposantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonTroisiemeComposantComponent]
    });
    fixture = TestBed.createComponent(MonTroisiemeComposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
