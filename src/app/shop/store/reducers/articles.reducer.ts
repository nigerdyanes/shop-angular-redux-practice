import { Action, createReducer, on } from '@ngrx/store';

import { ArticleI } from '../../models/article.model';
import * as actions from "../actions"

export interface ArticleState {
  articles: ArticleI[];
  cart: ArticleI[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const articleInitialState: ArticleState = {
  articles: [],
  cart:[],
  loaded: false,
  loading: false,
  error: null,
};


const _articlesReducer = createReducer(articleInitialState,

    on(actions.loadArticles, state => ({ ...state, loading: true })),

    on(actions.loadArticlesSucces, (state, {articles}) => {
        return {
         ...state,
         loading:false,
         loaded:true,
         articles: [...articles]
        }
    }),

    on(actions.loadArticlesFailed, (state,{payload}) => {
        return {
         ...state,
         loading:false,
         loaded:false,
         error: payload
        }
    }),

    on(actions.addToCart, (state,{article}) => {
      return {
       ...state,
       cart:[...state.cart, article]
      }
    }),

    on(actions.removeToCart, (state, {article}) => {
      return {
        ...state,
        cart: state.cart.filter(cartP => cartP.id !== article.id)
      }
    })
    
     
);


export function articlesReducer(state: ArticleState | undefined, action: Action) {
    return _articlesReducer(state, action)
} 
