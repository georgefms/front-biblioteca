import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { BooksService } from '../services/books.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books$: Observable<Book[]>;
  displayedColumns = ['id', 'name', 'year','author', 'gender']

  constructor(private bookService: BooksService) {
    this.books$ = this.bookService.list();
   }

  ngOnInit(): void {
    
  }

}
