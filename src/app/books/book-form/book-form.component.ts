import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators} from '@angular/forms';
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
    name: ['', 
    [Validators.required,
    Validators.minLength(5),
    Validators.maxLength(200)
    ]],
    year: [NaN, 
    [Validators.required,
    Validators.minLength(4),
    Validators.maxLength(4)]],
    author: ['', 
    [Validators.required,
    Validators.maxLength(100)]],
    gender: ['',
    [Validators.required,
      Validators.maxLength(100)]]
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

  getErrorMessage(fieldName: string){
    const field = this.form.get(fieldName)
    if(field?.hasError('required')){
      return 'Campo obrigatório'
    }
    if(field?.hasError('minlength')){
      const requiredLength: number = field.errors ? field.errors['minlength']['requiredLength'] : 5;
      return `Tamanho mínimo precisa ser de ${requiredLength} caracteres`
    }
    if(field?.hasError('maxlength')){
      const requiredLength: number = field.errors ? field.errors['maxlength']['requiredLength'] : 200;
      return `Tamanho máximo deve ser de ${requiredLength} caracteres`
    }
    return 'Campo invalido'
  }
}
