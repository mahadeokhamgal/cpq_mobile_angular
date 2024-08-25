import { Component, Input } from '@angular/core';
import { QuoteService } from 'src/app/quote.service';
import { QuoteModal } from 'src/interface/common';

@Component({
  selector: 'app-quote-header',
  templateUrl: './quote-header.component.html',
  styleUrls: ['./quote-header.component.less']
})
export class QuoteHeaderComponent {
  
  quote: QuoteModal;

  constructor(private quoteService: QuoteService) {
    this.quote = quoteService.quote;
  }
}
