import { Component } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'articles',
  templateUrl: './list_article.component.html',
  styleUrls: ['../app.component.css']
})
export class ListComponent {

  articles: Array<any> = [];

  constructor(private articlesService: ArticlesService){

  }

  ngOnInit(){
    this.articlesService.getArticles().subscribe(
      (data: any) => {
        this.articles = data.articles || [];
      }
    );
  }
}
