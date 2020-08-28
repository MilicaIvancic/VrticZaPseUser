import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DogsService } from './services/dogs.service';
import { DogsResult } from './models/dogs-result';
import { Router } from '@angular/router';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {

    public data: DogsResult;

    constructor(
        private dogService: DogsService,
        private router: Router,
    ) {}

    ngOnInit() {
        this.getData();
    }

    getData(){
        
        this.dogService.getDogs().subscribe(x=>{
            this.data=x
            console.log(this.data);
        });
    }
    getDataSecunPage(x){
        
        this.dogService.getDogsSecundPage(x).subscribe(y=>{
            this.data=y
            
        });
    }

    details(x) {
        this.router.navigate(['dashboard', 'dogDetails', x]);
      }

      upisiPsa(x) {
        this.router.navigate(['charts', 'upisiPsa', x]);
      }
}
