import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map';

@Injectable()
export class ArticlesService {

  constructor(private http: Http) {
  }

  getArticles(): any{
    return this.http.get('./assets/data/data.json')
                .map(res => res.json());
  }

  getDetailArticle = (id: number): any => {
    return this.http.get('./assets/data/data.json')
                .map(res => res.json().articles
                  .find(article => article.id === id));
  }
}