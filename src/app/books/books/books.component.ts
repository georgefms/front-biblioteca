import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
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

  constructor(private booksService: BooksService,
    public dialog: MatDialog) {
    this.books$ = this.booksService.list()
    .pipe(
      catchError( error => {
        this.onError('Erro ao carregar livros');
        return of([])
      })
    );
   }

   onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage
    });
  }

  ngOnInit(): void {
    
  }

}
