import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../models/book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit{

  @Input() books: Book[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() delete = new EventEmitter(false); 


  readonly displayedColumns = ['id', 'name', 'year','author', 'gender', 'actions']


  constructor() {
    
  }

  ngOnInit(): void {
    
  }

  onAdd(){
    this.add.emit(true);
  }

  onEdit(book: Book){
    this.edit.emit(book);
  }
  onDelete(book: Book){
    this.delete.emit(book);
  }
}
