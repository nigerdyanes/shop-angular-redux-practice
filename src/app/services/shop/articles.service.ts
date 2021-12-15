import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { ArticleI } from '../../shop/models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  urlApi = environment.URL_API;

  constructor(
    private http:HttpClient
  ) { }

  getArticles(): Observable<ArticleI[]> {
    return this.http.get<ArticleI[]>(`${this.urlApi}/articles`);
  }
}
