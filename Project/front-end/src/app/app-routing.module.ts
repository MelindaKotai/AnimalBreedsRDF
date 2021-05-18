import { ParrotsComponent } from './parrots/parrots.component';
import { DogsComponent } from './dogs/dogs.component';
import { CatsComponent } from './cats/cats.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'cats', component: CatsComponent},
  {path: 'dogs', component: DogsComponent},
  {path: 'parrots', component: ParrotsComponent},
  {path: '', redirectTo:'/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
