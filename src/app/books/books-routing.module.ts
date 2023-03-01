import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookFormComponent } from './book-form/book-form.component';
import { BooksComponent } from './books/books.component';
import { BookResolver } from './guard/book.resolver';

const routes: Routes = [
  { path: '', component: BooksComponent},
  { path: 'new', component: BookFormComponent, resolve: {book: BookResolver}},
  { path: 'edit/:id', component: BookFormComponent, resolve: {book: BookResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
