import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";

import * as actions from "../../store/actions";

import { AppState } from 'src/app/app.reducers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private store:Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch( actions.loadArticles() );
  }

}
