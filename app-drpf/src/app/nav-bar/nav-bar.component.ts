import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  Menus: Array<Menu>;

  constructor() {
    this.Menus = [{
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

  ngOnInit() {
  }

}

interface Menu {
  'Parent': number;
  'menuItems': Array<Menu>;
  'Id': number;
  'ParentId': number;
  'SortField': number;
  'menuName': string;
  'itemURL': string;
  'isActive': boolean;
}