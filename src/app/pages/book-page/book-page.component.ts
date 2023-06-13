import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookModel } from 'src/app/models/book-model.model';
@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss'],
})
export class BookPageComponent implements OnInit {
  @Input()
  result!: BookModel;
  productID!: string | null;
  productTitle!: string | null;
  productData: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // mi salvo l'id del libro cliccato in productID
    this.productID = this.activatedRoute.snapshot.paramMap.get('id');
    // mi salvo il title del libro cliccato in productTitle
    this.productTitle = this.activatedRoute.snapshot.paramMap.get('title');

    // Uso productID e productTitle per filtrare la ricerca e non avere risultati multipli
    this.http
      .get(
        'https://www.googleapis.com/books/v1/volumes?q=' +
          this.productID +
          '%20' +
          this.productTitle +
          '&key=AIzaSyCLF19wOMvXpP4hz7Ip4QGhTV28qj_Rdt0'
      )
      .subscribe((data) => {
        this.productData = data;
        console.log(this.productData);
      });
  }
}
