import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-contact-section',
  templateUrl: './footer-contact-section.component.html',
  styleUrls: ['./footer-contact-section.component.css']
})
export class FooterContactSectionComponent implements OnInit {
  ContactData: ContactDatum;

  constructor() {
    this.ContactData = {
      'email' 		: 'info@donorrecipientpartnershipfoundation.org',
      'phone' 		: '(909) 307-4540',
      'address' 		: '23921 Lake Dr. #4153, Crestline, Ca 92325'
    };
  }

  ngOnInit() {
  }

}

interface ContactDatum {
  'email': string;
  'phone': string;
  'address': string;
}
