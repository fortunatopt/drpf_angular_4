import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Person } from "../interfaces/person";

@Injectable()

export class ApiDataService {
  People: Array<Person>;
  http: Http;

  constructor() { }


  GetMenuData() {
    this.http.get('people.json').subscribe((res:Response) => this.People = res.json());
  }
  GetTeamMembers() {
    return this.teamMemberData;
  }

  GetLeaders() {
    return this.leaderData;
  }

  GetMenu() {
    return this.menus;
  }

  GetPrograms() {
    return this.programData;
  }

  GetArticles() {
    return this.articleData;
  }

  GetAboutFollow() {
    return {
      aboutustext: '<p>We are a non-profit organization to help living donors and recipients. Please contact us if you need assistance, or can lend a helping hand.</p><p>All proceeds from your donation will benefit Organ Donor/Recipient expense programs. Donor Recipient Partnership Foundation is a registered 501(c)(3), Not-For-Profit status with Tax ID EIN #81-1839684. For more information, please send email to </p><p><a href="mailto:' + this.GetContactInfo().email + '">' + this.GetContactInfo().email + '</a></p>',
      followusitems: this.followUsItems
    }
  }

  GetFooterLinks() {
    return this.footerLinks;
  }

  GetContactInfo() {
    return this.contactInfo;
  }

  GetLinks() {
    return this.links;
  }

  private contactInfo = {
    'email': 'info@donorrecipientpartnershipfoundation.org',
    'phone': '(909) 307-4540',
    'address': '23921 Lake Dr. #4153, Crestline, Ca 92325'
  };



  private programData = [{
    'Id': 1,
    'sortField': 1,
    'title': 'Emotional Support and Mentorship Program',
    'description': '<p>The <strong>Emotional Support and Mentorship Program</strong> is designed to connect clients to a volunteer-based Emotional Support Mentor that has been involved with someone close to them, been through the process themselves, or are involved in the health care system directly involving transplants.</p><p>Mentors are prior donors, recipients, or have been a donor/recipient caretaker in the past. The Mentors&rsquo; main objectives are to be an emotional sounding board and to attempt to comfort and ease the minds of the clients. They would be a direct contact for clients that may have questions and would be able to offer any helpful insight based on personal experiences. They also assist donor/recipient caretakers in answering questions they may have and guiding them along the way as needed.</p><p>Mentors receive training and are be able to identify the signs of depression and anxiety, and report such actions or feelings to the donor or recipient&rsquo;s social worker as necessary. They maintain a positive attitude as this will promote health and healing for the clients. They are accessible to the clients starting at the pre-transplant process all the way through the post-transplant process.</p><p><strong>Mentors do not provide any medical advice and refer the clients to their transplant doctors and specialists.</strong></p><p>Having a mentor for the clients will be an invaluable and rewarding experience for all involved.</p>',
    'image': 'assets/img/sitephotos/wheelchair.jpg',
    'isActive': true,
    'type': 1
  }, {
    'Id': 2,
    'sortField': 2,
    'title': 'Care Package program',
    'description': '<p>In our experience, we have discovered that the act of receiving any item, big or small post-transplant helped us maintain a positive attitude and showed us that we are being thought of. Through the <strong>Care Package Program</strong>, volunteers who wish to put together care packages can sign up via the DRP website. DRP would receive these packages and distribute them to the donors and recipients.</p><p>The foundation will provide an acceptable &ldquo;needed items&rdquo; list to assist any volunteers signing up. Some examples of such smaller items are being: arts and craft items, books, greeting cards, essential oils, candles, soaps, possible non-perishable food items etc. Any additional items which are donated, but not on the approved list, will need to be approved by the DRP President or approved program manager.</p><p>Packages will be created based on the needs of the donors and recipients, while paying close attention to special needs such as allergies and food restrictions. Care packages will be delivered to the transplant center, extended stay location, or to the home post-transplant.</p>',
    'image': 'assets/img/sitephotos/carepackage.jpg',
    'isActive': true,
    'type': 1
  }, {
    'Id': 3,
    'sortField': 3,
    'title': 'Handcrafted Care Program',
    'description': '<p>The <strong>Handcrafted Care Program</strong> is designed to allow volunteers who would like to donate handcrafted items that could help benefit living donors, recipients, or DRP. Such items could be towels, blankets, quilts, household items or any items that would be beneficial or be used for fundraising purposes. They can donate specific items that can be given directly to donors, recipients, or even the caretakers.</p><p>Volunteers can also donate items to DRP for fundraising efforts. This will allow DRP with funding to raise awareness and to be able to help more living donors and recipients.  These items will be sent to DRP and distributed to the clients as they become available.</p>',
    'image': 'assets/img/sitephotos/handcrafted.jpg',
    'isActive': true,
    'type': 1
  }, {
    'Id': 4,
    'sortField': 4,
    'title': 'Volunteer Services Program',
    'description': '<p>The <strong>Volunteer Services Program</strong> allows persons who have skills that may be beneficial to DRP such as: Legal services, catering services, document services, web based services, IT services, security services Etc. to be able to volunteer those services to DRP.</p><p>Approval from DRP Managers and Directors like DRP&rsquo;s IT and Security Manager would be required for any electronic services and could bring beneficial services to the board.</p>',
    'image': 'assets/img/sitephotos/services.jpg',
    'isActive': true,
    'type': 1
  }, {
    'Id': 7,
    'sortField': 5,
    'title': 'Gas Card Program',
    'description': '<p>The <strong>Gas Card Program</strong> was created to help offset the cost of transportation for donors, recipients, and caregivers. It allows for an activated gas card for various stages of the transplant for individuals who live further than 150 from the transplant center.</p><p>The program is designed with ride-sharing in mind whenever possible in an effort to reduce overall spending. There are limits in place for each member of the partnership, as well as an overall limit per transplant.</p>',
    'image': 'assets/img/sitephotos/gas.jpg',
    'isActive': true,
    'type': 2
  }];

  private articleData = [{
    'Id': 2,
    'articleName': 'Sponsoring the Partnership Between Living Donors & Recipients',
    'articleSource': 'Mountain News, Lake Arrowhead, CA',
    'articleDate': new Date('2016-05-30'),
    'articleURL': 'http://www.mountain-news.com/news/article_5687e3b6-22d2-11e6-b8d2-97bbe381df77.html',
    'articleShort': 'Through a strong passion to help those in need, and help make an intensive process easier, the Donor Recipient Partnership (DRP) Foundation was started. It did not stop at raising close to $15,000 for Chad Beers, or at Crestline resident Rabecca Fortunato being a living donor. Her interest in helping those in need sparked the idea of a nonprofit organization that can, and will, do just that. ',
    'articleImage': 'assets/img/news/rabecca1.jpg',
    'articleAuthor': 'Andrea Garcia',
    'isActive': true
  }, {
    'Id': 3,
    'articleName': 'The Courage of a Living Donor',
    'articleSource': 'Mountain News, Lake Arrowhead, CA',
    'articleDate': new Date('2016-03-21'),
    'articleURL': 'http://www.mountain-news.com/mountain_living/article_a8bf2620-ebd8-11e5-ae89-1711b024fd63.html',
    'articleShort': 'A small laugh came from mountain resident Rabecca Fortunato when asked why she was so passionate about being a living donor. \'I laugh because I don’t know,\' she said. \'Honestly I think that everyone should do what they can to help other people.\'',
    'articleImage': 'assets/img/news/chad1.jpg',
    'articleAuthor': 'Andrea Garcia',
    'isActive': true
  }, {
    'Id': 4,
    'articleName': 'Woman offers kidney to Navy veteran she’s never met',
    'articleSource': 'Redlands Daily Facts',
    'articleDate': new Date('2015-12-25'),
    'articleURL': 'http://www.redlandsdailyfacts.com/health/20151225/woman-offers-kidney-to-navy-veteran-shes-never-met',
    'articleShort': null,
    'articleImage': 'assets/img/news/rabecca2.jpg',
    'articleAuthor': 'Phill Courtney',
    'isActive': true
  }];

  private followUsItems = [{
    'Id': 6,
    'itemName': 'Follow Us on Google+',
    'itemSub': null,
    'itemURL': null,
    'itemClass': 'fa fa-google-plus',
    'isActive': true,
    'footerSection': 2,
    'sortOrder': 4
  }, {
    'Id': 7,
    'itemName': 'Follow Us on Twitter',
    'itemSub': null,
    'itemURL': null,
    'itemClass': 'fa fa-twitter',
    'isActive': true,
    'footerSection': 2,
    'sortOrder': 3
  }, {
    'Id': 8,
    'itemName': 'Follow Us on Tumblr',
    'itemSub': null,
    'itemURL': null,
    'itemClass': 'fa fa-tumblr',
    'isActive': true,
    'footerSection': 2,
    'sortOrder': 5
  }, {
    'Id': 9,
    'itemName': 'Follow Us on Facebook',
    'itemSub': null,
    'itemURL': 'https://www.facebook.com/donorrecipientpartnershipfoundation/',
    'itemClass': 'fa fa-facebook',
    'isActive': true,
    'footerSection': 2,
    'sortOrder': 1
  }, {
    'Id': 10,
    'itemName': 'Follow Us on YouTube',
    'itemSub': null,
    'itemURL': null,
    'itemClass': 'fa fa-youtube-play',
    'isActive': true,
    'footerSection': 2,
    'sortOrder': 2
  }];

  private leaderData = [{
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
  }];

  private teamMemberData = [{
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

  private footerLinks = [{
    'Id': 1,
    'itemName': 'About Us',
    'itemSub': 'Who we are',
    'itemURL': '#/mission',
    'itemClass': null,
    'isActive': true,
    'footerSection': 1,
    'sortOrder': 1
  }, {
    'Id': 2,
    'itemName': 'Our Work',
    'itemSub': 'What we do',
    'itemURL': '#/programs',
    'itemClass': null,
    'isActive': true,
    'footerSection': 1,
    'sortOrder': 2
  }, {
    'Id': 3,
    'itemName': 'Our Team',
    'itemSub': 'Meet our team',
    'itemURL': '#/team',
    'itemClass': null,
    'isActive': true,
    'footerSection': 1,
    'sortOrder': 3
  }, {
    'Id': 11,
    'itemName': 'Minutes',
    'itemSub': 'past and present',
    'itemURL': '#/minutes',
    'itemClass': null,
    'isActive': true,
    'footerSection': 1,
    'sortOrder': 999
  }];

  private links = [{
    'Id': 1,
    'linkName': 'UNOS',
    'linkSub': ' - United Network for Organ Sharing',
    'linkURL': 'https://www.unos.org/',
    'isActive': true
  }, {
    'Id': 2,
    'linkName': 'theLivingBank',
    'linkSub': '',
    'linkURL': 'https://www.livingbank.org/',
    'isActive': true
  }, {
    'Id': 3,
    'linkName': 'NKR',
    'linkSub': ' - National Kidney Registry',
    'linkURL': 'http://kidneyregistry.org',
    'isActive': true
  }, {
    'Id': 4,
    'linkName': 'organdonor.gov',
    'linkSub': ' - U.S. Government Information on Organ Donation and Transplantation',
    'linkURL': 'http://www.organdonor.gov',
    'isActive': true
  }, {
    'Id': 5,
    'linkName': 'LD101',
    'linkSub': ' - Living Donor 101',
    'linkURL': 'http://www.livingdonor101.com/livingdonorregistry.shtml',
    'isActive': true
  }];

  private menus = [{
    'Parent': null,
    'menuItems': [{
      'Parent': 1,
      'menuItems': [],
      'Id': 6,
      'ParentId': 1,
      'SortField': 1,
      'menuName': 'Our Mission',
      'itemURL': 'mission',
      'isActive': true
    }, {
      'Parent': 1,
      'menuItems': [],
      'Id': 7,
      'ParentId': 1,
      'SortField': 2,
      'menuName': 'Our Team',
      'itemURL': 'team',
      'isActive': true
    }],
    'Id': 1,
    'ParentId': 0,
    'SortField': 1,
    'menuName': 'About Us',
    'itemURL': null,
    'isActive': true
  }, {
    'Parent': null,
    'menuItems': [{
      'Parent': 2,
      'menuItems': [],
      'Id': 8,
      'ParentId': 2,
      'SortField': 1,
      'menuName': 'Our Programs',
      'itemURL': 'programs',
      'isActive': true
    }, {
      'Parent': 2,
      'menuItems': [],
      'Id': 9,
      'ParentId': 2,
      'SortField': 2,
      'menuName': 'Our Impact',
      'itemURL': 'impact',
      'isActive': true
    }, {
      'Parent': 2,
      'menuItems': [],
      'Id': 10,
      'ParentId': 2,
      'SortField': 3,
      'menuName': 'About Kidney Transplants',
      'itemURL': 'kidneytransplant',
      'isActive': true
    }, {
      'Parent': 2,
      'menuItems': [],
      'Id': 11,
      'ParentId': 2,
      'SortField': 4,
      'menuName': 'About Liver Transplants',
      'itemURL': 'livertransplant',
      'isActive': true
    }, {
      'Parent': 2,
      'menuItems': [],
      'Id': 12,
      'ParentId': 2,
      'SortField': 5,
      'menuName': 'About Lung Transplants',
      'itemURL': 'lungtransplant',
      'isActive': true
    }, {
      'Parent': 2,
      'menuItems': [],
      'Id': 13,
      'ParentId': 2,
      'SortField': 6,
      'menuName': 'Other Transplants',
      'itemURL': 'othertransplant',
      'isActive': true
    }],
    'Id': 2,
    'ParentId': 0,
    'SortField': 2,
    'menuName': 'Our Work',
    'itemURL': null,
    'isActive': true
  }, {
    'Parent': null,
    'menuItems': [{
      'Parent': 3,
      'menuItems': [],
      'Id': 14,
      'ParentId': 3,
      'SortField': 1,
      'menuName': 'Become a Volunteer',
      'itemURL': 'volunteer',
      'isActive': true
    }],
    'Id': 3,
    'ParentId': 0,
    'SortField': 3,
    'menuName': 'Be Involved',
    'itemURL': null,
    'isActive': true
  }, {
    'Parent': null,
    'menuItems': [{
      'Parent': 4,
      'menuItems': [],
      'Id': 17,
      'ParentId': 4,
      'SortField': 1,
      'menuName': 'In the News',
      'itemURL': 'news',
      'isActive': true
    }, {
      'Parent': 4,
      'menuItems': [],
      'Id': 34,
      'ParentId': 4,
      'SortField': 2,
      'menuName': 'Stories',
      'itemURL': 'stories',
      'isActive': true
    }, {
      'Parent': 4,
      'menuItems': [],
      'Id': 33,
      'ParentId': 4,
      'SortField': 3,
      'menuName': 'Our Sponsors',
      'itemURL': 'sponsors',
      'isActive': true
    }, {
      'Parent': 4,
      'menuItems': [],
      'Id': 18,
      'ParentId': 4,
      'SortField': 3,
      'menuName': 'Links',
      'itemURL': 'links',
      'isActive': true
    }],
    'Id': 4,
    'ParentId': 0,
    'SortField': 4,
    'menuName': 'Resources',
    'itemURL': null,
    'isActive': true
  }
    // , {
    //   'Parent': null,
    //   'menuItems': [{
    //     'Parent': 23,
    //     'menuItems': [],
    //     'Id': 32,
    //     'ParentId': 23,
    //     'SortField': 1,
    //     'menuName': 'Admin Home',
    //     'itemURL': 'Admin/',
    //     'isActive': true
    //   }, {
    //     'Parent': 23,
    //     'menuItems': [],
    //     'Id': 30,
    //     'ParentId': 23,
    //     'SortField': 2,
    //     'menuName': 'Footer',
    //     'itemURL': 'Admin/footer',
    //     'isActive': true
    //   }, {
    //     'Parent': 23,
    //     'menuItems': [],
    //     'Id': 27,
    //     'ParentId': 23,
    //     'SortField': 3,
    //     'menuName': 'Links',
    //     'itemURL': 'Admin/links',
    //     'isActive': true
    //   }, {
    //     'Parent': 23,
    //     'menuItems': [],
    //     'Id': 24,
    //     'ParentId': 23,
    //     'SortField': 4,
    //     'menuName': 'Menus',
    //     'itemURL': 'Admin/menu',
    //     'isActive': true
    //   }, {
    //     'Parent': 23,
    //     'menuItems': [],
    //     'Id': 29,
    //     'ParentId': 23,
    //     'SortField': 5,
    //     'menuName': 'Minutes',
    //     'itemURL': 'Admin/minutes',
    //     'isActive': true
    //   }, {
    //     'Parent': 23,
    //     'menuItems': [],
    //     'Id': 28,
    //     'ParentId': 23,
    //     'SortField': 6,
    //     'menuName': 'News',
    //     'itemURL': 'Admin/news',
    //     'isActive': true
    //   }, {
    //     'Parent': 23,
    //     'menuItems': [],
    //     'Id': 25,
    //     'ParentId': 23,
    //     'SortField': 7,
    //     'menuName': 'Programs',
    //     'itemURL': 'Admin/programs',
    //     'isActive': true
    //   }, {
    //     'Parent': 23,
    //     'menuItems': [],
    //     'Id': 31,
    //     'ParentId': 23,
    //     'SortField': 8,
    //     'menuName': 'Sponsors',
    //     'itemURL': 'Admin/sponsor',
    //     'isActive': true
    //   }, {
    //     'Parent': 23,
    //     'menuItems': [],
    //     'Id': 35,
    //     'ParentId': 23,
    //     'SortField': 9,
    //     'menuName': 'Stories',
    //     'itemURL': 'Admin/stories',
    //     'isActive': true
    //   }, {
    //     'Parent': 23,
    //     'menuItems': [],
    //     'Id': 26,
    //     'ParentId': 23,
    //     'SortField': 10,
    //     'menuName': 'Team',
    //     'itemURL': 'Admin/team',
    //     'isActive': true
    //   }, {
    //     'Parent': 23,
    //     'menuItems': [],
    //     'Id': 36,
    //     'ParentId': 23,
    //     'SortField': 11,
    //     'menuName': 'Volunteers',
    //     'itemURL': 'Admin/volunteers',
    //     'isActive': true
    //   }],
    //   'Id': 23,
    //   'ParentId': 0,
    //   'SortField': 6,
    //   'menuName': 'Admin',
    //   'itemURL': null,
    //   'isActive': true
    // }
  ];

}