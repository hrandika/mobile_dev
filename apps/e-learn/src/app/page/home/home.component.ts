import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, interval, map, of, Subscription, take, tap } from 'rxjs';

interface CardDetails {
  title: string;
}

@Component({
  selector: 'responsive-inc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
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

  public count = 0;
  private subcsription: Subscription;

  constructor() {
    //
    of(this.cards).pipe(
      tap((result) => console.log(result)),
      map((x) => {
        const newArrya = [...x];
        newArrya.pop();
        return newArrya;
      }),
      tap((result) => console.log(result))
    );
    // .subscribe();

    this.subcsription = interval(500)
      .pipe(
        tap((v) => console.log(v)),
        filter((val) => val % 2 !== 0),
        // tap((v) => console.log(v))
        tap((v) => (this.count = v))
      )
      .subscribe();
  }

  ngOnInit(): void {
    console.log();
  }

  ngOnDestroy(): void {
    this.subcsription.unsubscribe();
  }
}
