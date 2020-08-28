import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDetails } from '../models/user-details';


@Injectable({
  providedIn: 'root'
})
export class ProfilUserService {

  constructor(private http: HttpClient) { }

  getUserProfile() {
    return this.http.get<UserDetails>('http://localhost:5172/api/User/'+localStorage.getItem('token') ).pipe();
  }
  
}
