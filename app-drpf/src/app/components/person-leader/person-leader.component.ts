import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../../services/api-data.service';
import { Person } from "../../interfaces/person";

@Component({
  selector: 'app-person-leader',
  templateUrl: './person-leader.component.html',
  styleUrls: ['./person-leader.component.css']
})
export class PersonLeaderComponent implements OnInit {
  People: Array<Person>;

  constructor(private apiDataService: ApiDataService) {
    this.People = this.apiDataService.GetLeaders();
  }

  ngOnInit() {
  }

}
