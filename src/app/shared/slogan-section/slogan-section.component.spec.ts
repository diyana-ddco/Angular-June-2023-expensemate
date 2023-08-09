import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SloganSectionComponent } from './slogan-section.component';

describe('SloganSectionComponent', () => {
  let component: SloganSectionComponent;
  let fixture: ComponentFixture<SloganSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SloganSectionComponent]
    });
    fixture = TestBed.createComponent(SloganSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
