import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterContactSectionComponent } from './footer-contact-section.component';

describe('FooterContactSectionComponent', () => {
  let component: FooterContactSectionComponent;
  let fixture: ComponentFixture<FooterContactSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterContactSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterContactSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
