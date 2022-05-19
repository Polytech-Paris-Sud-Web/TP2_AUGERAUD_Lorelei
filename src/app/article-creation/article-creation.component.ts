import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RawArticle } from 'models/rawarticle';
import { Article, ArticleService } from '../article.service';


@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.css']
})
export class ArticleCreationComponent implements OnInit {

  articleForm : FormGroup;

  @Output()
  newArticle: EventEmitter<Article> = new EventEmitter<Article>();

  constructor(private fb: FormBuilder, private articleService : ArticleService) {
    this.articleForm = this.fb.group({
      title: ['Fake Title', Validators.required ],
      content : ['', Validators.required ],
      author : ['', Validators.required ],
    });
  }

  ngOnInit(): void {
  }
  
  createArticle(){
    const {title, content, author}  = this.articleForm.value;
    const rawArticle : RawArticle = {
      title,
      content,
      author
  }
  this.articleService.addArticle(rawArticle).subscribe((article) => this.newArticle.emit(article));
}

}
