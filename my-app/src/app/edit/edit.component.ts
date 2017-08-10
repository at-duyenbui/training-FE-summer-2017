import { Component } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'article-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['../app.component.css']
})
export class EditComponent {

  article: any;
  id: number;
  private sub: any;
  private dataJson: any;
  articleForm: any;
  imgUrl: any;

  constructor(private articleService: ArticlesService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder){
    this.article = {};
    this.articleForm = this.formBuilder.group({
      id: new FormControl(),
      image: new FormControl(),
      title: new FormControl('', [Validators.required]),
      author: new FormControl(),
      content: new FormControl()
    });
  }

  ngOnInit(){
    this.sub = this.route.params.subscribe(
      params => {
        this.id = +params['id'];
      });
    this.dataJson = this.articleService.getDetailArticle(this.id).subscribe(
      data => {
        this.articleForm.setValue(data);
        this.imgUrl = data.image;
      });
    
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
    this.dataJson.unsubscribe();
  }

}
