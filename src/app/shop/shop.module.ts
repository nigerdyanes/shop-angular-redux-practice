import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { SharedModule } from "../shared/shared.module"

import { HomeComponent } from './pages/home/home.component';
import { ListArticlesComponent } from './components/list-articles/list-articles.component';
import { ArticleComponent } from './components/article/article.component';



@NgModule({
  declarations: [
    HomeComponent,
    ListArticlesComponent,
    ArticleComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
