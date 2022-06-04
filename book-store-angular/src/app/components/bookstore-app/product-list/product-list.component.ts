import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/components/shared/services/books.service';
import { Book } from '../model/Book';
import { PriceFilter } from '../model/PriceFilter';

@Component({
  selector: 'book-store-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  books: Array<Book> = [];
  booksCopy: Array<Book> = [];



  constructor(private booksService: BooksService) {
  }

  ngOnInit(): void {
    this.getBooksList();
  }

  // Retorna a lista de livros.
  getBooksList() {
    this.booksService.getBooksList().subscribe((books => {
      this.books = books;
      this.booksCopy = books;
    }));
  }

  filterBooksByPrice(priceFilter: PriceFilter) {

    this.books = this.booksCopy;

    let booksFilter: Array<Book> = [];
    let priceInitial = priceFilter.priceInitial;
    let priceFinal = priceFilter.priceFinal;

    for (let b of this.books) {
      if (b.price >= priceInitial && b.price <= priceFinal) {
        booksFilter.push(b);
      }
      this.books = booksFilter;
    }
  }

  reloadBooks() {
    this.getBooksList();
  }

}
