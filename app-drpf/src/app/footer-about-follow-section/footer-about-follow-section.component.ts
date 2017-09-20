import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-about-follow-section',
  templateUrl: './footer-about-follow-section.component.html',
  styleUrls: ['./footer-about-follow-section.component.css']
})
export class FooterAboutFollowSectionComponent implements OnInit {
  AboutFollowData: AboutFollow;

  constructor() {
    this.AboutFollowData = {
      'aboutustext': '<p>We are a non-profit organization to help living donors and recipients. Please contact us if you need assistance, or can lend a helping hand.</p><p>All proceeds from your donation will benefit Organ Donor/Recipient expense programs. Donor Recipient Partnership Foundation is a registered 501(c)(3), Not-For-Profit status with Tax ID EIN #81-1839684. For more information, please send email to </p><p><a href="mailto:info@donorrecipientpartnershipfoundation.org">info@donorrecipientpartnershipfoundation.org</a></p>',
      'followusitems': [{
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
      }]
    };
  }

  ngOnInit() {
  }

}

interface AboutFollow {
  'aboutustext': string;
  'followusitems': Array<FollowItem>;
}

interface FollowItem {
  'Id': number;
  'itemName': string;
  'itemSub': string;
  'itemURL': string;
  'itemClass': string;
  'isActive': boolean;
  'footerSection': number;
  'sortOrder': number;
}