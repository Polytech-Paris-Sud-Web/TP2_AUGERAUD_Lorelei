import { Component, OnInit } from '@angular/core';
import { Article, ArticleService } from '../article.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  articles: Article[] | undefined;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.getArticles().subscribe(value => {
      this.articles = value.slice(-10);
    });
  }
}
