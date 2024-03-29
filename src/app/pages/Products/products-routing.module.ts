

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product/add-product.component';


const routes: Routes = [
  {
    path: "",
    component: ProductsComponent,
  },
  {
    path: "addProduct",
    component: AddProductComponent,
  },


  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductsRoutingModule { }
