import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AddDogComponent } from './components/add-dog/add-dog.component';
import { DogDetailsComponent } from './components/dog-details/dog-details.component';

const routes: Routes = [
    {
        path: '', children: [

            { path: '', component: DashboardComponent },
            { path: 'addDog', component: AddDogComponent },
            { path: 'dogDetails/:id', component: DogDetailsComponent }
            
      
          ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {
}
