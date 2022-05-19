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
    return this.http.get<Article[]>("https://my-json-server.typicode.com/Polytech-Paris-Sud-Web/TP2_AUGERAUD_Lorelei/articles");
  }

  public getArticle(id:number): Observable<Article> {
    return this.http.get<Article>("https://my-json-server.typicode.com/Polytech-Paris-Sud-Web/TP2_AUGERAUD_Lorelei/articles/" + id);
  }

  public delete(id:number): Observable<Article[]> {
    return this.http.delete<Article[]>("https://my-json-server.typicode.com/Polytech-Paris-Sud-Web/TP2_AUGERAUD_Lorelei/articles/"+id);
  }

  public addArticle(newArticle: RawArticle): Observable<Article> {
    return this.http.post<Article>("https://my-json-server.typicode.com/Polytech-Paris-Sud-Web/TP2_AUGERAUD_Lorelei/articles", newArticle);
  }

  public getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>("https://my-json-server.typicode.com/Polytech-Paris-Sud-Web/TP2_AUGERAUD_Lorelei/authors/");
  }
 




} 







