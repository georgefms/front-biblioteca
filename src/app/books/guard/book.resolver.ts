import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Book } from '../models/book';
import { BooksService } from '../services/books.service';

@Injectable({
  providedIn: 'root'
})
export class BookResolver implements Resolve<Book> {

  constructor(private service: BooksService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Book> {
    if(route.params && route.params['id']){
      return this.service.findById(route.params['id']);
    }
    return of({id: NaN,name: '',year: NaN,author: '',gender: ''});
  }
}
