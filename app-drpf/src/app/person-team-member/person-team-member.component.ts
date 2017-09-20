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
      'Id': 1,
      'personName': 'Rabecca Fortunato',
      'personTitle': 'President',
      'personDescription': 'Rabecca has extensive experience in management responsibilities with overall business activities including all communications both internally and externally. Rabecca is a respected and caring leader in her community. She is responsible for day to day operations and participates as needed in special projects. Rabecca is experienced, knowledgeable, outgoing, energetic, professional, and ready to embrace new challenges. She is driven to establish and achieve business objectives. She is a resourceful team member, skilled in identifying project needs, and creatively solving problems. As a living donor, herself, she understands firsthand the unique challenges that a donor faces, and can assist in helping with an understanding of the process that few have.',
      'personImage': 'assets/img/team/RabeccaTeamPic.jpg',
      'personGoogle': null,
      'personTwitter': null,
      'personLinkedIn': 'rabecca-fortunato-478195b4',
      'personFacebook': 'rabecca.fortunato',
      'isLeader': true,
      'isActive': true
    }, {
      'Id': 2,
      'personName': 'Chad Beers',
      'personTitle': 'Vice President',
      'personDescription': 'Chad has been associated with the Military in some way throughout his whole life as his father Edward Beers was in the U.S. Army and he is a U.S. Navy Veteran himself. Chad has volunteered extensively to help build housing for families in need, fostering animals, as well as volunteering for a nonprofit organization supporting military spouses. With this organization, he advocated to change and add policies in support of military members and military spouses. He was a small business owner as an electrical contractor at a young age. He is a Master Electrician with many years of extensive project management, and budget experience. He has led many multi-million dollar electrical projects, managing as many as 40 journeyman and apprentices at one time. As an organ recipient, Chad is very passionate and dedicated in paying forward the success of the foundation by assisting in creating the programs that will be implemented to achieve the goals of helping others.',
      'personImage': 'assets/img/team/ChadTeamPic.jpg',
      'personGoogle': null,
      'personTwitter': null,
      'personLinkedIn': null,
      'personFacebook': 'chad.beers.3',
      'isLeader': true,
      'isActive': true
    }, {
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
