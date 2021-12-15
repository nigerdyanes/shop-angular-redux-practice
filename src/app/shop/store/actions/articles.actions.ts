import { createAction, props } from "@ngrx/store";
import { ArticleI } from '../../models/article.model';

export const loadArticles = createAction('[Articles] Load Articles');

export const loadArticlesSucces = createAction('[Articles] Load Articles Success', props<{articles: ArticleI[]}>());

export const loadArticlesFailed = createAction('[Articles] Load Articles Failed', props<{payload: any}>());

export const addToCart = createAction('[Articles] Add To Cart', props<{article: ArticleI}>());

export const removeToCart = createAction('[Articles] Remove To Cart', props<{article: ArticleI}>());