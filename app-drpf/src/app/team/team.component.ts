import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  PageTitle: string;
  PageSubtitle: string;

  constructor() {
    this.PageTitle = 'Meet Our Amazing Team';
    this.PageTitle = 'These are the people who keep it all going!';
  }

  ngOnInit() {
  }

}