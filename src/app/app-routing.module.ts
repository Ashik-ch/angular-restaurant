import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { DeleteRestaurantComponent } from './delete-restaurant/delete-restaurant.component';
import { ListComponent } from './list/list.component';
import { UpdateRestComponent } from './update-rest/update-rest.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';

const routes: Routes = [


  { path: '', component: ListComponent },
  { path: "viewproduct/:id", component: ViewproductComponent },  //passing params for each DetailedVeiw
  { path: "addrest", component: AddRestaurantComponent },
  { path: "update/:id", component: UpdateRestComponent },
  { path: "delete/:id", component: DeleteRestaurantComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
