import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonTeamMemberComponent } from './person-team-member.component';

describe('PersonTeamMemberComponent', () => {
  let component: PersonTeamMemberComponent;
  let fixture: ComponentFixture<PersonTeamMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonTeamMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonTeamMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
