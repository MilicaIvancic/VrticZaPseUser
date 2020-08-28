import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { StatModule } from '../../shared';
import { AddDogComponent } from './components/add-dog/add-dog.component';
import { ToastModule } from 'primeng/toast';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DogDetailsComponent } from './components/dog-details/dog-details.component';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        DashboardRoutingModule,
        StatModule,
        ToastModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        DashboardComponent,
        AddDogComponent,
        DogDetailsComponent
    ]
})
export class DashboardModule { }
