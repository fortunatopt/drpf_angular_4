import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  PageTitle: string;
  PageSubtitle: string;
  Links: Array<Link>;

  constructor() {
    this.PageTitle = 'Helpful links';
    this.PageSubtitle = 'Links to Become a registered living donor or organ and tissue donor postmortem';
    this.Links = [{
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
  }

  ngOnInit() {
  }

}

interface Link {
  'Id': number;
  'linkName': string;
  'linkSub': string;
  'linkURL': string;
  'isActive': boolean;
}
