import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../model/Book';

@Component({
  selector: 'book-store-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  book!: Book;

  constructor() { }

  ngOnInit(): void {
  }

  // Trunca as casas decimais de um valor flutuante.
  truncateRating(rating: number): number {
    return rating | 0;
  }

}
