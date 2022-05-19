import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Article, ArticleService } from '../article.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm : FormGroup;

  @Output()
  searchedList: EventEmitter<Article[]> = new EventEmitter<Article[]>();

  constructor(private fb: FormBuilder,private articleService: ArticleService) { 
    this.searchForm = this.fb.group({
      searchText: ['', Validators.required ],
    });
  }

  ngOnInit(): void {
  }

  search(){
      const searchText:string = this.searchForm.get("searchText")?.value;

      this.articleService.getArticles().subscribe(fetchedArticles => {
      const res = fetchedArticles.filter(a => a.title.includes(searchText) || a.content.includes(searchText) );
      this.searchedList.emit(res)
      });
  }


}
