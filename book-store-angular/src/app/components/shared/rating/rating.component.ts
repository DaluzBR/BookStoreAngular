import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'book-store-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input('rating-value')
  rating = 0;

  starWidth = 0;

  constructor() { }

  ngOnInit(): void {
    this.calcRating();
  }

  // Calcula a largura das estrelas proporcional a classificação.
  calcRating(){
    this.starWidth = this.rating * 74 / 5;
  }

}
