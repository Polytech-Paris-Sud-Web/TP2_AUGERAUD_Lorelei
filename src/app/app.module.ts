import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleService } from './article.service';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleCreationComponent } from './article-creation/article-creation.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthorBioComponent } from './author-bio/author-bio.component';
import { SearchComponent } from './search/search.component';


const appRoutes: Routes = [
  { path: 'create', component: ArticleCreationComponent},
  { path: 'articles', component: ArticlesComponent},
  { path: 'home', component: HomePageComponent},
  { path: 'articles/:id', component: ArticleComponent },
  { path: 'authors/:name', component: AuthorBioComponent},
  { path: '', component: ArticleComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlesComponent,
    ArticleCreationComponent,
    HomePageComponent,
    AuthorBioComponent,
    SearchComponent,

  ],
  imports: [
    RouterModule.forRoot (
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
  
})
export class AppModule { 

}


