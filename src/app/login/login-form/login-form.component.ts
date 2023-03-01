import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit{

  user = this.formBuilder.group({
    nick: ['',[
    Validators.required,
    Validators.minLength(5)]],
    password: ['',[
    Validators.required,
    Validators.minLength(8)]]
  })

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private snackBar: MatSnackBar,
    private userService: UserService){

  }

  ngOnInit(): void {
    // const user: User = this.route.snapshot.data['user'];
    // this.user.setValue({
    //   nick: user.nick,
    //   password: user.password
    // })
  }

  getErrorMessage(fieldName: string){
    const field = this.user.get(fieldName)
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

  onCancel(){
    this.location.back();
  }

  onSubmit(){
    this.userService.save(this.user.value)
    .subscribe((s)=>this.onSuccess(),
    (e)=>this.onError())
  }

  private onError(){
    this.snackBar.open("Erro ao cadastrar usuário", '',{duration: 3000})
  }
  private onSuccess(){
    this.snackBar.open("Usuário cadastrado com Sucesso", '',{duration: 3000});
    this.onCancel();
  }

  

}
