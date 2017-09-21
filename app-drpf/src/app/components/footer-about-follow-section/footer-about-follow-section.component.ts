import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../../services/api-data.service';
import { AboutFollow } from '../../interfaces/footer';

@Component({
  selector: 'app-footer-about-follow-section',
  templateUrl: './footer-about-follow-section.component.html',
  styleUrls: ['./footer-about-follow-section.component.css']
})
export class FooterAboutFollowSectionComponent implements OnInit {
  AboutFollowData: AboutFollow;

  constructor(private apiDataService: ApiDataService) {
    this.AboutFollowData = this.apiDataService.GetAboutFollow();
  }

  ngOnInit() {
  }

}