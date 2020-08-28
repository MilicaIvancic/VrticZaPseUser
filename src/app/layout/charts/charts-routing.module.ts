import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsComponent } from './charts.component';
import { DogServicesComponent } from './dog-services/dog-services.component';
import { DogServiceComponent } from './dog-service/dog-service.component';

const routes: Routes = [
    {
        path: '', children: [

            { path: '', component: ChartsComponent },
            { path: 'upisiPsa/:id', component: DogServicesComponent },
            { path: 'upisiPsaServic/:id/:sid', component: DogServiceComponent }
            
      
          ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChartsRoutingModule {}
