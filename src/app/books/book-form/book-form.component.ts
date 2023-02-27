import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
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
    private snackBar: MatSnackBar,
    private location: Location){
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
