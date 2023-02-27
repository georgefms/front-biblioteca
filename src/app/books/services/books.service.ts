import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Book } from '../models/book';
import { delay, first, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private readonly API = './assets/books.json'

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Book[]>(this.API)
    .pipe(
      first(),
      delay(1000),
      tap(books => console.log(books)
      )
    );
  }
}
