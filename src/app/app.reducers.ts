import { ActionReducerMap } from "@ngrx/store";
import * as reducers from "./shop/store/reducers";

export interface AppState {
    articles: reducers.ArticleState
}


export const appReducer : ActionReducerMap<AppState> = {
    articles: reducers.articlesReducer
}