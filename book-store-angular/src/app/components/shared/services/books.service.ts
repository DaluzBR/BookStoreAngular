import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/components/bookstore-app/model/Book';

@Injectable({
  providedIn: 'root'
})

export class BooksService {

  private booksUrl: string = "http://localhost:3100/api/books";

  httpOptions = {
    Headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  // Retorna a lista de livros.
  getBooksList(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.booksUrl);
  }

  // Retorna a lista de livros.
  getBooksById(id: number): Observable<Book> {
    return this.httpClient.get<Book>(`${this.booksUrl}/${id}`);
  }

}
