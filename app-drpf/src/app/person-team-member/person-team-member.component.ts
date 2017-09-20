import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-team-member',
  templateUrl: './person-team-member.component.html',
  styleUrls: ['./person-team-member.component.css']
})
export class PersonTeamMemberComponent implements OnInit {
  People: Array<Person>;

  constructor() {
    this.People = [{
      'Id': 3,
      'personName': 'Teri Lee',
      'personTitle': 'Treasurer',
      'personDescription': 'With over fifteen years of experience as a bookkeeper Teri has offered her services as Treasurer to our company. She has thirteen years of experience directly working for non-profit corporation bookkeeping. She is also owner of her own bookkeeping business.',
      'personImage': 'assets/img/team/TeriTeamPic.jpg',
      'personGoogle': null,
      'personTwitter': null,
      'personLinkedIn': null,
      'personFacebook': null,
      'isLeader': false,
      'isActive': true
    }, {
      'Id': 4,
      'personName': 'Becky Beers',
      'personTitle': 'Secretary',
      'personDescription': 'Becky is a Lt. Colonel in the United States Air Force. Her husband suffers from a kidney disease that requires a kidney transplant. She is passionate about this company and the prospect of making this world a better place. Becky offers us her services and experience as a military member dedicated to making this country a better place and as a spouse of an organ transplant recipient.',
      'personImage': 'assets/img/team/BeckyTeamPic.jpg',
      'personGoogle': null,
      'personTwitter': null,
      'personLinkedIn': null,
      'personFacebook': null,
      'isLeader': false,
      'isActive': true
    }, {
      'Id': 5,
      'personName': 'Patrick Fortunato Jr',
      'personTitle': 'Director',
      'personDescription': 'Patrick has worked in the IT field for twenty years and is in charge of our website and IT department. Patrick has a Bachelor\'s degree in Computer Science with eleven years experience in the private sector and eleven and a half years in the United States Air Force.',
      'personImage': 'assets/img/team/PatrickTeamPic.jpg',
      'personGoogle': 'u/0/+PatrickFortunatoJr',
      'personTwitter': 'fortunatop',
      'personLinkedIn': 'patrickfortunato',
      'personFacebook': 'patrick.fortunato',
      'isLeader': false,
      'isActive': true
    }];
  }

  ngOnInit() {
  }

}

interface Person {
  Id: number;
  personName: string;
  personTitle: string;
  personDescription: string;
  personImage: string;
  personGoogle: string;
  personTwitter: string;
  personLinkedIn: string;
  personFacebook: string;
  isLeader: boolean;
  isActive: boolean;
}
