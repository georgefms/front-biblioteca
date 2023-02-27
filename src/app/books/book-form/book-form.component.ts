import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ControlConfig } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit{

  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private service: BooksService,
    private snackBar: MatSnackBar){
    this.form = this.formBuilder.group({
      name: [null],
      year: [null],
      author: [null],
      gender: [null]
    });
  }

  ngOnInit(): void {
    
  }

  onSubmit(){
    this.service.save(this.form.value)
    .subscribe(data => console.log(data), error => this.onError());
  }
  onCancel(){

  }

  private onError(){
    this.snackBar.open("Erro ao cadastrar livro", '',{duration: 3000})
  }
}
