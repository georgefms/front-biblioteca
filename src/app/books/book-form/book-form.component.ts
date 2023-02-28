import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../models/book';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit{

  form = this.formBuilder.group({
    id: [NaN],
    name: [''],
    year: [NaN],
    author: [''],
    gender: ['']
  });
  constructor(private formBuilder: NonNullableFormBuilder,
    private service: BooksService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute){
  }

  ngOnInit(): void {
    const book: Book = this.route.snapshot.data['book'];
    this.form.setValue({
      id: book.id,
      name: book.name,
      author: book.author,
      gender: book.gender,
      year: book.year
    })
    
  }

  onSubmit(){
    this.service.save(this.form.value)
    .subscribe(result => this.onSuccess(), error => this.onError());
  }
  onCancel(){
    this.location.back();
  }

  private onError(){
    this.snackBar.open("Erro ao cadastrar livro", '',{duration: 3000})
  }
  private onSuccess(){
    this.snackBar.open("Livro cadastrado com Sucesso", '',{duration: 3000});
    this.onCancel();
  }
}
