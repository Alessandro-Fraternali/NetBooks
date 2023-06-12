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
  productData: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // mi salvo l'id del libro cliccato in productID
    this.productID = this.activatedRoute.snapshot.paramMap.get('id');

    // Uso productID per filtrare la ricerca
    // todo alcuni libri hanno lo stesso id, serve un secondo parametro
    this.http
      .get(
        'https://www.googleapis.com/books/v1/volumes?q=' +
          this.productID +
          '&key=AIzaSyCLF19wOMvXpP4hz7Ip4QGhTV28qj_Rdt0'
      )
      .subscribe((data) => {
        this.productData = data;
        console.log(this.productData);
      });
  }
}
