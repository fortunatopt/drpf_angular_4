import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {
  PageTitle: string;
  PageSubtitle: string;
  ContactData: ContactData;

  constructor() {
    this.PageTitle = 'Our Mission';
    this.PageTitle = 'This is why we do what we do!';
    this.ContactData = {
      phone: '(909) 307-4540',
      email: 'info@donorrecipientpartnershipfoundation.org'
    };
  }

  ngOnInit() {
  }
}

interface ContactData {
  phone: string;
  email: string;
}
