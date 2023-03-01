import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { BookFormComponent } from './book-form/book-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BooksListComponent } from './books-list/books-list.component';



@NgModule({
  declarations: [
    BooksComponent,
    BookFormComponent,
    BooksListComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class BooksModule { }
