import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { MessageService } from 'primeng/api';
import { UserServiceService } from '../signup/services/user-service.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    formModel = {
        email: '',
        password: ''
        
      }
      progressBar = true;
    constructor(
        public service: UserServiceService, 
        private router: Router, 
        private messageService: MessageService,

    ) {}

    ngOnInit() {
        if (localStorage.getItem('token') != null)
      this.router.navigateByUrl('/dashboard');
    }

    
        onSubmit(form: NgForm) {
            
            this.service.login(form.value).subscribe(
              (res: any) => {
                  
                localStorage.setItem('token', res);
                 this.messageService.add({severity:'success', summary:'Vrtic za pse login', detail:'Uspesno logovanje'});
                //let id= localStorage.getItem('token');
                //console.log(id);
                this.router.navigateByUrl('/dashboard');
              }
              ,
      err => {
        if (err.status == 404){
            this.messageService.add({severity:'error', summary:'Vrtic za pse login', detail:'Korisnik ne postoji'});
        }
          
        else
        this.messageService.add({severity:'error', summary:'Vrtic za pse login', detail:'Doslo je do greske pokusajte kasnije'});
          console.log(err);
      });
          }
}
