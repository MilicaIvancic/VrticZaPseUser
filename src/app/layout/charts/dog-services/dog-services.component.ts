import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DogServiceService } from '../services/dog-service.service';
import { MessageService } from 'primeng/api';
import { ServiceResult } from '../models/service-result';

@Component({
  selector: 'app-dog-services',
  templateUrl: './dog-services.component.html',
  styleUrls: ['./dog-services.component.scss']
})
export class DogServicesComponent implements OnInit {

  id:any;
  data: ServiceResult;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: DogServiceService,
    private messageService: MessageService,
  ) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');

      this.getServices();
  });

  }

  getServices() {
    this.service.getServices().subscribe(x=>{
      this.data=x
  });
  }

  kupiServis(x, y){
    this.router.navigate(['charts', 'upisiPsaServic', x, y]);
  }

}
