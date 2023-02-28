import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Book } from '../models/book';
import { delay, first, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private readonly API = '/api/books'

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
  findById(id: number){
    return this.httpClient.get<Book>(`${this.API}/${id}`);
  }

  save(record: Partial<Book>){
    if(record.id){
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Partial<Book>){
    return this.httpClient.post<Book>(this.API, record)
    .pipe(first());
  }

  private update(record: Partial<Book>){
    return this.httpClient.put<Book>(`${this.API}/${record.id}`, record)
    .pipe(first());
  }
}
