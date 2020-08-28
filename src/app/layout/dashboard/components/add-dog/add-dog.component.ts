import { Component, OnInit } from '@angular/core';
import { DogService } from '../../services/dog.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { EducatorResult } from '../../models/educator-result';
import { RaceResult } from '../../models/race-result';

@Component({
  selector: 'app-add-dog',
  templateUrl: './add-dog.component.html',
  styleUrls: ['./add-dog.component.scss']
})
export class AddDogComponent implements OnInit {


  private educators: EducatorResult;
  private races: RaceResult;

  constructor(
    public service: DogService,
    private messageService: MessageService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.service.formModel.reset();
    this.getRaces();
    this.getEducarors();
  }

  getRaces() {

    this.service.getRaces().subscribe(x => {
      this.races = x
      //console.log(x);
    });
  }

  getEducarors() {

    this.service.getEducators().subscribe(x => {
      this.educators = x
      //console.log(x);
    });
  }

  onFileChange(event) {
    this.service.selectedFile = event.target.files[0];
  }

  onSubmit() {
    this.service.addDog().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.service.formModel.reset();
          this.service.formModel.reset();
          this.messageService.add({ severity: 'error', summary: 'Prijavljivanje psa u vrtic', detail: 'Los format podataka' });

        }
      },
      err => {
        if (err.status == 201) {
          this.service.formModel.reset();
          this.messageService.add({ severity: 'success', summary: 'Prijavljivanje psa u vrtic', detail: 'Uspesno ste prijavili psa u nas vrtic.' });

        }
        if (err.status == 422) {
          this.service.formModel.reset();
          this.messageService.add({ severity: 'error', summary: 'Prijavljivanje psa u vrtic', detail: 'Los format podataka' });
        }
        if (err.status == 404) {

          this.messageService.add({ severity: 'error', summary: 'Prijavljivanje psa u vrtic', detail: 'Trazeni podatak ne postoji' });
        }
        if (err.status == 409) {

          this.messageService.add({ severity: 'error', summary: 'Prijavljivanje psa u vrtic', detail: 'Svadja izmedju podataka' });
        }
        if (err.status == 500) {

          this.messageService.add({ severity: 'error', summary: 'Prijavljivanje psa u vrtic', detail: 'Doslo je do greske, pokusajte kasnije' });
          console.log(err);
        }
      }
    );
  }



}
