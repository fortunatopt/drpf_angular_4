import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../../services/api-data.service';
import { Program } from '../../interfaces/program';
import { Article } from '../../interfaces/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Programs: Array<Program>;
  Articles: Array<Article>;
  Program: Program;
  Article: Article;

  constructor(private apiDataService: ApiDataService) {
    this.Programs = this.apiDataService.GetPrograms();

    this.Articles = this.apiDataService.GetArticles();

    this.Program = this.Programs[getRandomInt(0, this.Programs.length - 1)];
    this.Article = this.Articles[getRandomInt(0, this.Articles.length - 1)];
  }

  ngOnInit() {
  }

}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}