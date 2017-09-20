import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonLeaderComponent } from './person-leader.component';

describe('PersonLeaderComponent', () => {
  let component: PersonLeaderComponent;
  let fixture: ComponentFixture<PersonLeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonLeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
