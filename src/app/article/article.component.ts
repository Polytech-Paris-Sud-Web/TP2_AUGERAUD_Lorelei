import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../article.service';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  
  @Input()
  article! : Article;

  @Output()
  deletedArticle : EventEmitter<Article> = new EventEmitter();

  constructor(private route: ActivatedRoute, private articleService : ArticleService){
  }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      if (params && params['id']){
        this.articleService.getArticle(params['id']).subscribe(fetchedArticle => this.article = fetchedArticle);
      };
    })
  };


  delete(){
    this.deletedArticle.emit(this.article);
  }
  

}
