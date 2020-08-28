import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DogServiceService } from './services/dog-service.service';
import { ServiceResult } from './models/service-result';

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    animations: [routerTransition()]
})
export class ChartsComponent implements OnInit {
  
    data: ServiceResult;

    constructor(
        private service: DogServiceService,
    ) {}

    ngOnInit() {
        this.getServices();
    }

    getServices() {
        this.service.getServices().subscribe(x=>{
          this.data=x
      });
      }
}
