

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreedDetailsComponent } from './breed-details/breed-details.component';


const routes: Routes = [
 
  {path: 'breed-details/:id', component: BreedDetailsComponent},
 
  {path: '', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
