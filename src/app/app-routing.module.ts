import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { ListComponent } from './list/list.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';

const routes: Routes = [


  { path: '', component: ListComponent },
  { path: "viewproduct/:id", component: ViewproductComponent },  //passing params for each DetailedVeiw
  { path: "addrest", component: AddRestaurantComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
