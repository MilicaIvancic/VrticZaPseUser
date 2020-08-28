import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { RaceResult } from '../models/race-result';
import { EducatorResult } from '../models/educator-result';
import { DogDetails } from '../models/dog-details';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  
  selectedFile: File =null;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder
  ) { }

  formModel = this.fb.group({
    DogSex: ['', Validators.required],
    Name: ['',[Validators.required, Validators.minLength(3)]],
    DogDescription: ['',[Validators.required, Validators.minLength(10)]],
    Chip: ['',[Validators.required, Validators.minLength(8)]],
    BirthDate: ['', Validators.required],
    Castration: ['', Validators.required],
    RaceId: ['', Validators.required],
    CardNumer: ['', [Validators.required,  Validators.pattern("^[0-9]*$"), Validators.minLength(4)]],
    EducatorId: ['', Validators.required],
    Img: ['', Validators.required]
    } 
  );

  getRaces() {
  
    return this.http.get<RaceResult>(`http://localhost:5172/api/Race?perPage=100`).pipe(
    );
  }

  getEducators() {
  
    return this.http.get<EducatorResult>(`http://localhost:5172/api/Employe?perPage=100&&RoleId=6`).pipe(
    );
  }

  addDog() {
   
    const fd = new FormData();
    fd.append('Img', this.selectedFile);
    fd.append('Name', this.formModel.value.Name);
    fd.append('DogSex', this.formModel.value.DogSex);
    fd.append('DogDescription', this.formModel.value.DogDescription);
    fd.append('Chip', this.formModel.value.Chip);
    fd.append('Castration', this.formModel.value.Castration);
    fd.append('BirthDate', this.formModel.value.BirthDate);
    fd.append('UserId', localStorage.getItem('token'));
    fd.append('RaceId', this.formModel.value.RaceId);
    fd.append('CardNumer', this.formModel.value.CardNumer);
    fd.append('EducatorId', this.formModel.value.EducatorId);
    fd.append('UserEmail', "milica.zajeganovic.ivancic@gmail.com");
    console.log(fd);
    return this.http.post('http://localhost:5172/api/Dog',fd );
  }

  getDogUser(id) {
  
    return this.http.get<DogDetails>(`http://localhost:5172/api/Dog/GetUserDog?dtop=` +id).pipe(
    );
  }
}
