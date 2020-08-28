import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ProfilUserService } from './services/profil-user.service';
import { UserDetails } from './models/user-details';
import { Router } from '@angular/router';



@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    
    userDetails : UserDetails;
   

    constructor(
      private service: ProfilUserService,
      private router: Router
      ) {
        
    }

    ngOnInit() {
    this.getUser();
      }

      getUser(){

        this.userDetails = new UserDetails();
        this.service.getUserProfile().subscribe(
          res => {
            this.userDetails = res;
            console.log(res);
          },
          err => {
            console.log(err);
          },
        );
      }

      addDog() {
        this.router.navigate(['dashboard','addDog']);
    }
    
    details(x) {
      this.router.navigate(['dashboard', 'dogDetails', x]);
    }
    upisiPsa(x) {
      this.router.navigate(['charts', 'upisiPsa', x]);
    }
    
    }

