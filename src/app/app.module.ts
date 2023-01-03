import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './list/list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    ViewproductComponent,
    AddRestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
