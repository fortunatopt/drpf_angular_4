import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAboutFollowSectionComponent } from './footer-about-follow-section.component';

describe('FooterAboutFollowSectionComponent', () => {
  let component: FooterAboutFollowSectionComponent;
  let fixture: ComponentFixture<FooterAboutFollowSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterAboutFollowSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterAboutFollowSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
