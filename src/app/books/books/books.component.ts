import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];
  displayedColumns = ['_id', 'name', 'year','author', 'gender']

  constructor() { }

  ngOnInit(): void {
  }

}
