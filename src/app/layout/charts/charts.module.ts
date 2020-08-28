import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';
import { PageHeaderModule } from '../../shared';
import { DogServicesComponent } from './dog-services/dog-services.component';
import { DogServiceComponent } from './dog-service/dog-service.component';
import { ToastModule } from 'primeng/toast';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule, 
        Ng2Charts, 
        ChartsRoutingModule, 
        PageHeaderModule,
        ToastModule,
        FormsModule,
        ReactiveFormsModule,],
    declarations: [ChartsComponent, DogServicesComponent, DogServiceComponent]
})
export class ChartsModule {}
