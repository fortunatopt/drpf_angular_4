import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-links-section',
  templateUrl: './footer-links-section.component.html',
  styleUrls: ['./footer-links-section.component.css']
})
export class FooterLinksSectionComponent implements OnInit {
  FooterLinks: Array<FooterLink>;
  constructor() {
    this.FooterLinks = [{
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
  }

  ngOnInit() {
  }

}

interface FooterLink {
  'Id': number;
  'itemName': string;
  'itemSub': string;
  'itemURL': string;
  'itemClass': string;
  'isActive': boolean;
  'footerSection': number;
  'sortOrder': number;
}
