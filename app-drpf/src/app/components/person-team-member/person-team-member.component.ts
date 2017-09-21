import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../../services/api-data.service';
import { Person } from "../../interfaces/person";

@Component({
  selector: 'app-person-team-member',
  templateUrl: './person-team-member.component.html',
  styleUrls: ['./person-team-member.component.css']
})
export class PersonTeamMemberComponent implements OnInit {
  People: Array<Person>;

  constructor(private apiDataService: ApiDataService) {
    this.People = this.apiDataService.GetTeamMembers();
  }

  ngOnInit() { }

}