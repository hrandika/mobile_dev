import { Component, OnInit } from '@angular/core';

interface CardDetails {
  title: string;
}


@Component({
  selector: 'responsive-inc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cards: CardDetails[] = [
    {
      title: 'Randika',
    },
    {
      title: 'Chanaka',
    },
    {
      title: 'Padma',
    },
    {
      title: 'Supuni',
    },
    {
      title: 'Randika',
    },
    {
      title: 'Chanaka',
    },
    {
      title: 'Padma',
    },
    {
      title: 'Supuni',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
