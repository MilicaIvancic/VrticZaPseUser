import { Injectable } from '@angular/core';
import { ServiceResult } from '../models/service-result';
import { HttpClient } from '@angular/common/http';
import { Service } from '../models/service';
import { FormBuilder, Validators } from '@angular/forms';
import { UserDetails } from '../../dashboard/models/user-details';

@Injectable({
  providedIn: 'root'
})
export class DogServiceService {

  DogId;
  UserId;
  ServiceId;
  constructor(
    private http: HttpClient,
    private fb: FormBuilder
  ) { }

  getServices() {
  
    return this.http.get<ServiceResult>(`http://localhost:5172/api/Service`).pipe(
    );
  }
  getService(id) {
  
    return this.http.get<Service>(`http://localhost:5172/api/Service/` +id).pipe(
    );
  }

  formModel = this.fb.group({ 
    Price: ['', [Validators.required,  Validators.pattern("^[0-9]*$")]],
    } 
  );

  upisiPsa() {
    var body = {
      Money: this.formModel.value.Price,
      DogId:this.DogId,
      UserId:localStorage.getItem('token'),
      ServiceId:this.ServiceId
    };
    console.log(body);
   
    return this.http.post('http://localhost:5172/api/Dog/UpisiPsa', body);
  }
}
