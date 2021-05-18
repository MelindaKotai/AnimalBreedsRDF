import { ShowDogsComponent } from './dogs/show-dogs/show-dogs.component';
import { SharedService } from './shared.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { ShowCatsComponent } from './cats/show-cats/show-cats.component';
// import { DogsComponent } from './dogs/dogs.component';

import { ParrotsComponent } from './parrots/parrots.component';
import { ShowParrotsComponent } from './parrots/show-parrots/show-parrots.component';
import { InsertAnimalsComponent } from './insert-animals/insert-animals.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnimalCategoriesComponent } from './animal-categories/animal-categories.component';
import {DogsComponent} from './dogs/dogs.component';



@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    ShowCatsComponent,
    DogsComponent,
    ShowDogsComponent,
    ParrotsComponent,
    ShowParrotsComponent,
    InsertAnimalsComponent,
    AnimalCategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
