import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../../services/api-data.service';
import { Menu } from '../../interfaces/menu';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  Menus: Array<Menu>;

  constructor(private apiDataService:ApiDataService) {
    this.Menus = this.apiDataService.GetMenu();
  }

  ngOnInit() {
  }

}