import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API = '/api/users'

  constructor(private httpClient: HttpClient) { }

  save(record: Partial<User>){
    return this.httpClient.post<User>(this.API,record);
  }
}
