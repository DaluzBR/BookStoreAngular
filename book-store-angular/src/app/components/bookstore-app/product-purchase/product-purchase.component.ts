import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../shared/services/books.service';
import { Book } from '../model/Book';

@Component({
  selector: 'book-store-product-purchase',
  templateUrl: './product-purchase.component.html',
  styleUrls: ['./product-purchase.component.css']
})
export class ProductPurchaseComponent implements OnInit {

  id = 0;
  book!: Book;

  constructor(private actRoute: ActivatedRoute, private booksService: BooksService) {
  }

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


  purchaseBook(book: Book) {
    alert(`Livro ${book.name} comprado!`);
  }

  choicePayment(payment: number) {
    switch (payment) {
      case payment = 1: alert("Forma de pagamento: Boleto"); break;
      case payment = 2: alert("Forma de pagamento: Cartão Caixa"); break;
      case payment = 3: alert("Forma de pagamento: Cartão Hipercard"); break;
      case payment = 4: alert("Forma de pagamento: Cartão Master"); break;
      case payment = 5: alert("Forma de pagamento: Cartão Mercado Pago"); break;
      case payment = 6: alert("Forma de pagamento: Cartão Nubank"); break;
      case payment = 7: alert("Forma de pagamento: Cartão Santander"); break;
      case payment = 8: alert("Forma de pagamento: Cartão Visa"); break;
      case payment = 9: alert("Forma de pagamento: Pix"); break;

    }
  }
}
