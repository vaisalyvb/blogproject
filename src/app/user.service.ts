import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  newUser(user:any){
    return this.http.post("http://localhost:8000",user)
    .subscribe(data=>{console.log(data)})

  }
}