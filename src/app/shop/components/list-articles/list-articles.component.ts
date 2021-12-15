import { Component, OnInit } from '@angular/core';

import { Store } from "@ngrx/store";

import { AppState } from 'src/app/app.reducers';
import { ArticleI } from '../../models/article.model';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.scss']
})
export class ListArticlesComponent implements OnInit {
  
  articles: ArticleI[] = []

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select('articles').subscribe(({articles}) => {
      this.articles = articles;
    });
  }

}
