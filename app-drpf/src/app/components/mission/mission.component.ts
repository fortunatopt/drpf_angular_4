import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../../services/api-data.service';
import { ContactInfo } from '../../interfaces/footer';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {
  PageTitle: string;
  PageSubtitle: string;
  ContactData: ContactInfo;

  constructor(private apiDataService: ApiDataService) {
    this.PageTitle = 'Our Mission';
    this.PageTitle = 'This is why we do what we do!';
    this.ContactData = this.apiDataService.GetContactInfo();
  }

  ngOnInit() {
  }
}