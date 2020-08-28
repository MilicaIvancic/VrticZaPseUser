import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { Router } from '@angular/router';
import { UserServiceService } from './services/user-service.service';
import { CityResult } from './models/city-result';
import {MessageService} from 'primeng/api';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
   
    private data:CityResult;

    constructor(
      public service: UserServiceService, 
      private messageService: MessageService,
      private router: Router, 
  
    ) { }

    ngOnInit() {
        this.service.formModel.reset();
    this.getCityes();
    }

    getCityes(){
        
        this.service.getCityes().subscribe(x=>{
            this.data=x
            console.log(x);
        });
    }
    
      onSubmit() {
        this.service.inserUser().subscribe(
          (res: any) => {
              this.service.formModel.reset();
              console.log(res);
              this.messageService.add({severity:'success', summary:'Vrtic za pse registracije Message', detail:'Uspesna registracija'});
              //this.router.navigateByUrl('/login');
    
            
          },
          err => {
            console.log(err);
            if(err.status == 201 ){
                this.service.formModel.reset();
            this.messageService.add({severity:'success', summary:'Vrtic za pse registracije Message', detail:'Uspesno ste se registrovali'});
            
               this.router.navigateByUrl('/login');
               //problem, ne mogu da prikazem poruku na predhodnoj stranici tj na login.
            
            
            }
            if(err.status == 422){
                this.service.formModel.reset();
                this.messageService.add({severity:'error', summary:'Vrtic za pse registracije Message', detail:'Los format podataka'});
            }
            if(err.status == 404){
                this.service.formModel.reset();
                this.messageService.add({severity:'error', summary:'Vrtic za pse registracije Message', detail:'Trazeni podatak ne postoji'});
            }
            if(err.status == 409){
                this.service.formModel.reset();
                this.messageService.add({severity:'error', summary:'Vrtic za pse registracije Message', detail:'Korisnik sa ovim e-mailom je vec registrovan.'});
            }
            else{
                this.service.formModel.reset();
                this.messageService.add({severity:'error', summary:'Vrtic za pse registracije Message', detail:'Doslo je do greske, pokusajte kasnije'});
            }
            
            //neki neocekivan token
          }
        );
        
      }
}
