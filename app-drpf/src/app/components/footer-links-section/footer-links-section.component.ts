import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../../services/api-data.service';
import { FooterLink } from '../../interfaces/footer';

@Component({
  selector: 'app-footer-links-section',
  templateUrl: './footer-links-section.component.html',
  styleUrls: ['./footer-links-section.component.css']
})
export class FooterLinksSectionComponent implements OnInit {
  FooterLinks: Array<FooterLink>;

  constructor(private apiDataService: ApiDataService) {
    this.FooterLinks = this.apiDataService.GetFooterLinks();
  }

  ngOnInit() {
  }

}