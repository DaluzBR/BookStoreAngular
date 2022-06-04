import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PriceFilter } from '../model/PriceFilter';

@Component({
  selector: 'book-store-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  priceInitial!: string;
  priceFinal!: string;

  priceInitialPlaceholder = "R$ 0,00";
  priceFinalPlaceholder = "R$ 0,00";

  priceFilter: PriceFilter = new PriceFilter();

  @Output() priceFilterEmit = new EventEmitter();
  @Output() clearFilterEmit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  getPriceFilter() {
    if(!this.priceInitial || !this.priceFinal){
      alert("Todos os campos devem ser preenchidos.");
      return;
    }

    if (!(typeof this.priceInitial === "number") ||
      !(typeof this.priceFinal === "number")) {
      alert("Insira valores válidos");
      return;
    }
    if (this.priceInitial >= this.priceFinal) {
      alert("O preço inicial é maior do que o preço final!");
      return;
    }
    this.priceFilter.priceInitial = this.priceInitial;
    this.priceFilter.priceFinal = this.priceFinal;

    this.priceFilterEmit.emit(this.priceFilter);
  }

  clearFilter() {
    this.priceInitial = '';
    this.priceFinal = '';
    this.priceInitialPlaceholder = "R$ 0,00";
    this.priceFinalPlaceholder = "R$ 0,00";

    this.clearFilterEmit.emit();
  }


}

