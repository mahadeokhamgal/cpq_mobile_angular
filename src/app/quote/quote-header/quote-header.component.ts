import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quote-header',
  templateUrl: './quote-header.component.html',
  styleUrls: ['./quote-header.component.less']
})
export class QuoteHeaderComponent {
  currentTab : string | undefined;
  tabs: string[] = ['customer', 'product', 'contact'];
}
