import { Component, OnInit } from '@angular/core';

import { Article, ArticleService } from '../article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {


  articles: Article[] | undefined;


  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
    this.articleService.getArticles().subscribe((value => {
      console.log(value)
      this.articles = value;
    }
    ));
  }

  delete(article: Article){
    this.articleService.delete(article.id).subscribe(value =>{
      this.articleService.getArticles().subscribe(value => {
        this.articles = value;
      })
    })
  }

    newArticle(article: Article){
      this.articleService.getArticles().subscribe(value => {
        console.log(value)
        this.articles = value;
      });
    }

    onSearchedList(articles:Article[]){
      this.articles= articles;
    }
}
