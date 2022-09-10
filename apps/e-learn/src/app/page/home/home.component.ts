import { Component } from '@angular/core';
import { filter, interval, Observable } from 'rxjs';

interface CardDetails {
  title: string;
}

@Component({
  selector: 'responsive-inc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  cards: CardDetails[] = [
    { title: 'Randika' },
    { title: 'Chanaka' },
    { title: 'Padma' },
    { title: 'Supuni' },
    { title: 'Randika' },
    { title: 'Chanaka' },
    { title: 'Padma' },
    { title: 'Supuni' },
  ];

  public count$: Observable<number>;

  constructor() {
    this.count$ = interval(500).pipe(filter((val) => val % 2 === 0));
  }
}
