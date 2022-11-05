import { Component, OnInit } from '@angular/core';

export interface Product {
  name: string;
}

@Component({
  selector: 'responsive-inc-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  products: Product[] = [];
  sentEmails: Product[] = [];

  constructor() {
    console.log();
  }

  ngOnInit(): void {
    console.log();
  }

  public add(a: number, b: number) {
    return a + b;
  }

  public removeProduct(name: string) {
    this.products = this.products.filter((p) => p.name != name);
    this.sendEmail(`Remove ${name}`);
  }

  public sendEmail(name: string) {
    if (name != 'internal') {
      this.sentEmails.push({ name });
    }
  }
}
