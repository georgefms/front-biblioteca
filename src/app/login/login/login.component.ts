import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from 'src/app/books/services/books.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  constructor(booksService: BooksService,
    private router: Router,
    private route: ActivatedRoute){

  }
  ngOnInit(): void {
    
  }

  onAdd(){
    this.router.navigateByUrl('/login/new');   
  }

  onBooks(){
    this.router.navigateByUrl('/books');
  }
}
