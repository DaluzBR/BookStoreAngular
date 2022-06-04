/**
 * Objeto usado para representar um livro.
 */
export class Book {
    public id: number;
    public isbn: string;
    public name: string;
    public author: string;
    public price: number;
    public category: string;
    public rating: number;
    public idiom: string;
    public date: string;
    public description: string;
    public imageUrl: string;

    constructor() {
        this.id = 0;
        this.isbn = "";
        this.name = "";
        this.author = "";
        this.price = 0;
        this.category = "";
        this.rating = 0;
        this.idiom = "";
        this.date = "";
        this.description = "";
        this.imageUrl = "";
    }
}

