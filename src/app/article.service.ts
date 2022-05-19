import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import { RawArticle } from 'models/rawarticle';

export type Article =  {
  readonly title: string,
  readonly content: string,
  readonly author: string,
  readonly id:number
}

export type Author =  {
  readonly name: string,
  readonly content: string
}



@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http : HttpClient) { }

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:3000/articles");
  }

  public getArticle(id:number): Observable<Article> {
    return this.http.get<Article>("http://localhost:3000/articles/" + id);
  }

  public delete(id:number): Observable<Article[]> {
    return this.http.delete<Article[]>("http://localhost:3000/articles/"+id);
  }

  public addArticle(newArticle: RawArticle): Observable<Article> {
    return this.http.post<Article>("http://localhost:3000/articles", newArticle);
  }

  public getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>("http://localhost:3000/authors/");
  }
 




} 







