import { Component, OnInit } from '@angular/core';
import {Tile} from "../../models/Tile";

@Component({
  selector: 'responsive-inc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  tiles: Tile[] = [
    {icon: "date_range", label: "Calender"},
    {icon: "fastfood" , label: "Dining"},
    {icon: "work", label: "Take Out"},
    {icon: "directions_bike" , label: "Delivery"},
    {icon: "local_bar" , label: "Tab"},
    {icon: "local_atm" , label: "Payment"},
    {icon: "payment" , label: "Cashier"},
    {icon: "person" , label: "Manager"}
  ]

  ngOnInit(): void {}
}
