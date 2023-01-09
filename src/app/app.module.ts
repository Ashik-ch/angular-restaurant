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
import { FormsModule } from '@angular/forms';
import { UpdateRestComponent } from './update-rest/update-rest.component';
import { DeleteRestaurantComponent } from './delete-restaurant/delete-restaurant.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterpipePipe } from './pipe/filterpipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    ViewproductComponent,
    AddRestaurantComponent,
    UpdateRestComponent,
    DeleteRestaurantComponent,
    FilterpipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
