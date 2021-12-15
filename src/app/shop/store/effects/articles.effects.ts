import { Injectable } from '@angular/core';
import { Actions, createEffect,ofType } from '@ngrx/effects';

import * as actions from "../actions";
import { ArticlesService } from '../../../services/shop/articles.service';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class ArticlesEffects {

  constructor(
    private actions$: Actions,
    private articlesService:ArticlesService
  ) {}

  loadArticlesEffects$ = createEffect(
      () => this.actions$.pipe(
          ofType(actions.loadArticles), //Defino que accion escuchara el efecto.
          mergeMap(
              () => this.articlesService.getArticles()
                .pipe(
                    map((articles) => actions.loadArticlesSucces({articles})),
                    catchError(err => of(actions.loadArticlesFailed({payload:err})))
                )
          )
      )
  )
}
