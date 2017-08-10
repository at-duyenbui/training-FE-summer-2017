import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ArticlesService } from './articles.service';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ListComponent } from './list/list_article.component';
import { DetailComponent } from './detail/detail.component';
import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';
import { EditComponent } from './edit/edit.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'articles',
    component: ListComponent
  },
  {
    path: 'article/:id',
    component: DetailComponent
  },
  {
    path: 'article/:id/edit',
    component: EditComponent
  }
];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    AboutComponent,
    HomeComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule,
    routing
  ],
  providers: [ArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
