import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../shared/services/books.service';
import { Book } from '../model/Book';

@Component({
  selector: 'book-store-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id = 0;
  book = new Book();

  constructor(private actRoute: ActivatedRoute, private booksService: BooksService) { }

  ngOnInit(): void {
    this.getBookById();
  }

  getBookById() {
    this.actRoute.paramMap.subscribe(params => {
      let param = params.get('id');
      if (param !== null) {
        this.id = parseInt(param);
        this.booksService.getBooksById(this.id).subscribe({
          next: book => this.book = book,
          error: err => console.log('Error', err)
        })
      }
    });
  }

  // Trunca as casas decimais de um valor flutuante.
  truncateRating(rating: number): number {
    return rating | 0;
  }

}
