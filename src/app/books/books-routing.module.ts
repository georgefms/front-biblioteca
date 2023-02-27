import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookFormComponent } from './book-form/book-form.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  { path: '', component: BooksComponent},
  { path: 'new', component: BookFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
