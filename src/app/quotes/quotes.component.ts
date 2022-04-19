import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'if you dont like someones story write yours', 'chinua achebe', 'beth nduta',0,0),
    new Quote(2, 'Nobody can teach me who I am', 'chinua achebe', 'beth nduta',0,0),
    new Quote(3, 'The world id like a mask dancing', 'chinua achebe', 'beth nduta',0,0),
    // new Quote(4, 'Time is money', 'Ian Sang', 'beth nduta', 0, 0),
    // new Quote(5, 'Time is money', 'Ian Sang', 'beth nduta',0,0),
  ];
  addNewQuote(quote:Quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
