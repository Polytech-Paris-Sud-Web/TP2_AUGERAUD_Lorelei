import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService, Author } from '../article.service';

@Component({
  selector: 'app-author-bio',
  templateUrl: './author-bio.component.html',
  styleUrls: ['./author-bio.component.css']
})
export class AuthorBioComponent implements OnInit {

  @Input()
  author! : Author;

  constructor(private route: ActivatedRoute, private articleService : ArticleService) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      if (params && params['name']){
        this.articleService.getAuthors().subscribe(fetchedAuthors => {
          this.author = fetchedAuthors.filter(a => a.name == params['name'])[0];
        });
      };
    })
  }

}
