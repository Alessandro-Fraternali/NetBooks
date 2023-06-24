import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, filter, switchAll } from 'rxjs/operators';
import { BookModel } from 'src/app/models/book-model.model';
import { GoogleBooksService } from 'src/app/services/google-books.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Output() results = new EventEmitter<BookModel[]>();

  constructor(private book: GoogleBooksService, private el: ElementRef) {}

  ngOnInit() {
    // controllo cosa viene scritto nell'input
    fromEvent(this.el.nativeElement, 'keyup')
      .pipe(
        // prendo quello che viene scritto nell'input
        map((e: any) => e.target.value),
        // se non c'è niente smette di filtrare
        filter((text) => text.length > 1),
        // sovrascrivi i vecchi risultati
        map((query: string) => this.book.search(query)),
        //
        switchAll()
      )
      // manda in pagina i risultati finali
      .subscribe(
        (results) => {
          // emetto l'evento results
          this.results.emit(results);
          console.log(results);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
