import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../models/service';
import { DogServiceService } from '../services/dog-service.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-dog-service',
  templateUrl: './dog-service.component.html',
  styleUrls: ['./dog-service.component.scss']
})
export class DogServiceComponent implements OnInit {

  id: any;
  serviceId: any;
  data: Service;

  constructor(
    private route: ActivatedRoute,
    private service: DogServiceService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.route.paramMap.subscribe(params => {
      this.serviceId = params.get('sid');
    });
    this.getUser();
    this.service.formModel.reset();
  }

  getUser() {
    this.data = new Service();
    this.service.getService(this.serviceId).subscribe(
      x => {
        this.data = x;
        console.log(x);
      }
    );
  }

  backToDashboard() {
    this.router.navigate(['dashboard']);
  }

  onSubmit() {
    this.service.DogId=this.id;
    this.service.ServiceId=this.serviceId;

    this.service.upisiPsa().subscribe(
      (res: any) => {
        
          this.service.formModel.reset();
          this.service.formModel.reset();
          this.messageService.add({ severity: 'success', summary: 'Upisivanje psa u vrtic', detail: 'Uspesno ste upisali Vaseg psa' });

        
      },
      err => {
        if (err.status == 200) {
          this.service.formModel.reset();
          this.messageService.add({ severity: 'success', summary: 'Upisivanje psa u vrtic', detail: 'Uspesno ste upisali Vaseg psa' });

        }
        if (err.status == 201) {
          this.service.formModel.reset();
          this.messageService.add({ severity: 'success', summary: 'Upisivanje psa u vrtic', detail: 'Uspesno ste upisali Vaseg psa' });

        }
        if (err.status == 400) {
          this.service.formModel.reset();
          this.messageService.add({ severity: 'error', summary: 'Upisivanje psa u vrtic', detail: 'Morate uplatiti tacan iznos koliko paket kosta.' });
        }
        if (err.status == 404) {

          this.messageService.add({ severity: 'error', summary: 'Prijavljivanje psa u vrtic', detail: 'Trazeni podatak ne postoji' });
        }
        if (err.status == 409) {

          this.messageService.add({ severity: 'error', summary: 'Prijavljivanje psa u vrtic', detail: 'Pas je vec upisan u vrtic. Ako zelite da promenite paket obratite se direktoru' });
        }
        if (err.status == 500) {

          this.messageService.add({ severity: 'error', summary: 'Prijavljivanje psa u vrtic', detail: 'Doslo je do greske, pokusajte kasnije' });
        }
      }
    );
  }

}
