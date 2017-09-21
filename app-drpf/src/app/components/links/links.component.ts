import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../../services/api-data.service';
import { Link } from '../../interfaces/link';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  PageTitle: string;
  PageSubtitle: string;
  Links: Array<Link>;

  constructor(private apiDataService: ApiDataService) {
    this.PageTitle = 'Helpful links';
    this.PageSubtitle = 'Links to Become a registered living donor or organ and tissue donor postmortem';
    this.Links = this.apiDataService.GetLinks();
  }

  ngOnInit() {
  }

}