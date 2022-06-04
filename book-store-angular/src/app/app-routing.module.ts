import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookstoreAppComponent } from './components/bookstore-app/bookstore-app.component';
import { ProductDetailsComponent } from './components/bookstore-app/product-details/product-details.component';
import { ProductPurchaseComponent } from './components/bookstore-app/product-purchase/product-purchase.component';

const routes: Routes = [
  { path: '', component: BookstoreAppComponent },
  { path: 'purchase/:id', component: ProductPurchaseComponent },
  { path: 'details/:id', component: ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
