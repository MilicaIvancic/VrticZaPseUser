import { Injectable } from '@angular/core';
import { DogsResult } from '../models/dogs-result';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  constructor(
    private http: HttpClient
  ) { }

  getDogs() {
  

    return this.http.get<DogsResult>(`http://localhost:5172/api/Dog?UserId=` + localStorage.getItem('token')).pipe(
    );
  }
  getDogsSecundPage(x) {
  
    return this.http.get<DogsResult>('http://localhost:5172/api/Dog?UserId=' + localStorage.getItem('token')+ '&&?pageNumber='+x).pipe(
    );
  }
}
