import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Book } from "../model/Book";

@Injectable()
export class BookService {
    private url = 'https://localhost:44382/api/bookstore';
    httpOptions = {
        Headers: new HttpHeaders({
            'content-type': 'application/json'
        })
    }

    constructor(private http: HttpClient) {

    }

    // Retorna a lista de livros.
    getBookList(){
        return this.http.get(this.url);
    }
}