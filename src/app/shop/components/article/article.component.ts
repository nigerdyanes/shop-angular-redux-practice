import { Component, Input, OnInit } from '@angular/core';

import { Store } from "@ngrx/store";
import { AppState } from 'src/app/app.reducers';

import * as actions from "../../store/actions";
import { ArticleI } from '../../models/article.model';



@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input('article') article: ArticleI;

  constructor(
    private store:Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  addToCart(article: ArticleI) {
    this.store.dispatch( actions.addToCart({article}) );
  }

  removeCart(article: ArticleI) {
    this.store.dispatch( actions.removeToCart({article}) );
  }

}
