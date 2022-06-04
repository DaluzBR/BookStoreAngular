import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { BookstoreAppComponent } from './components/bookstore-app/bookstore-app.component';
import { FiltersComponent } from './components/bookstore-app/filters/filters.component';
import { ProductListComponent } from './components/bookstore-app/product-list/product-list.component';
import { ProductItemComponent } from './components/bookstore-app/product-list/product-item/product-item.component';
import { HttpClientModule } from '@angular/common/http';
import { BooksService } from './components/shared/services/books.service';
import { FormsModule } from '@angular/forms';
import { RatingComponent } from './components/shared/rating/rating.component';
import { EmptyListComponent } from './components/bookstore-app/empty-list/empty-list.component';
import { TruncatePipe } from './components/shared/pipes/truncate.pipe';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';

// **************************************************
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ProductDetailsComponent } from './components/bookstore-app/product-details/product-details.component';
import { ProductPurchaseComponent } from './components/bookstore-app/product-purchase/product-purchase.component';

registerLocaleData(ptBr);
// **************************************************

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    BookstoreAppComponent,
    FiltersComponent,
    ProductListComponent,
    ProductItemComponent,
    RatingComponent,
    EmptyListComponent,
    TruncatePipe,
    ProductDetailsComponent,
    ProductPurchaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    BooksService, 
    { provide: LOCALE_ID, useValue: 'pt' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
