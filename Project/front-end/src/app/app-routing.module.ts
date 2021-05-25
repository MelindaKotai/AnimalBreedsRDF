import { AnimalsComponent } from './breed-details/animals/animals.component';
import { ParrotsComponent } from './parrots/parrots.component';
import { DogsComponent } from './dogs/dogs.component';
import { CatsComponent } from './cats/cats.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreedDetailsComponent } from './breed-details/breed-details.component';
import { BreedDetailsFormComponent } from './breed-details/breed-details-form/breed-details-form.component';


const routes: Routes = [
  {path: 'cats', component: CatsComponent},
  {path: 'dogs', component: DogsComponent},
  {path: 'parrots', component: ParrotsComponent},
  {path: 'breed-details/:id', component: BreedDetailsComponent},//,
  //children: [
    {path: 'breed-form/:id', component: BreedDetailsFormComponent},
    {path: 'animals/:id', component: AnimalsComponent},
//  ]
//},
  {path: '', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
