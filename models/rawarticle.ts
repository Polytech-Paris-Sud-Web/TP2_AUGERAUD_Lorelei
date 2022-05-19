import { Author } from "src/app/article.service";

export interface RawArticle {
    title : string,
    content : string,
    author : Author,
  };