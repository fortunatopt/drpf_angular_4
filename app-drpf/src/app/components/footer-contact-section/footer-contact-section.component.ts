import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../../services/api-data.service';
import { ContactInfo } from '../../interfaces/footer';

@Component({
  selector: 'app-footer-contact-section',
  templateUrl: './footer-contact-section.component.html',
  styleUrls: ['./footer-contact-section.component.css']
})
export class FooterContactSectionComponent implements OnInit {
  ContactData: ContactInfo;

  constructor(private apiDataService: ApiDataService) {
    this.ContactData = this.apiDataService.GetContactInfo();
  }

  ngOnInit() {
  }

}