import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Programs: Array<Program>;
  Articles: Array<Article>;
  Program: Program;
  Article: Article;

  constructor() {
    this.Programs = [{
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

    this.Articles = [{
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

    this.Program = this.Programs[getRandomInt(0, this.Programs.length - 1)];
    this.Article = this.Articles[getRandomInt(0, this.Articles.length - 1)];
  }

  ngOnInit() {
  }

}

interface Program {
  'Id': number;
  'sortField': number;
  'title': string;
  'description': string;
  'image': string;
  'isActive': boolean;
  'type': number;
}

interface Article {
  'Id': number;
  'articleName': string;
  'articleSource': string;
  'articleDate': Date;
  'articleURL': string;
  'articleShort': string;
  'articleImage': string;
  'articleAuthor': string;
  'isActive': true;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}