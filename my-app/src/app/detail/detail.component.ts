import { Component } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'article-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['../app.component.css']
})
export class DetailComponent {

  article: any;
  id: number;
  private sub: any;
  private dataJson: any;

  constructor(private articleService: ArticlesService, private route: ActivatedRoute){
    this.article = {};
  }

  ngOnInit(){
    this.sub = this.route.params.subscribe(
      params => {
        this.id = +params['id'];
      }
    );
    this.dataJson = this.articleService.getDetailArticle(this.id).subscribe(
      data => {
        this.article = data;
      }
    );
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
    this.dataJson.unsubscribe();
  }
}
