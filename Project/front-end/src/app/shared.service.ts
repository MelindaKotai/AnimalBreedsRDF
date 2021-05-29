import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {  BreedDTO } from './shared/shared.model';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SharedService {



  // linkul de la API
readonly APIUrl = 'https://localhost:44322/Api';
  log: any;
  constructor(private http: HttpClient) { }
formData: BreedDTO = new BreedDTO();
list: BreedDTO[];
public dataBreeds: BreedDTO[];
currentAnimal: string = null;
itemInserted: boolean = false;
////////////////
// pentru a putea obtine rasele pentru animalele selectate
/////////////////

///////////////////////////////////////////////
// crearea functiei de obtinere categorii animale
////////////////////////////////////////////////
  getAnimalsList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/getCategories');
  }

  /////////////////////
  // obtin rasele 
  showBreeds(id: string){
    return this.http.get<any[]>(this.APIUrl + '/getBreeds/' + id);
  }


  //////////////////////////////////////////
  // functie de stergere rasa
  /////////////////////////////////////////
    deleteBreed(id: string){
    return this.http.delete(this.APIUrl + '/Delete/' + id,{ responseType: 'text' });
  }

  //////////////////////////////////////
  // functie de adaugare rasa
  /////////////////////////////////////
    postaddBreed(breed: BreedDTO){
      console.log(breed);
     return this.http.post(this.APIUrl + '/Insert', breed, { responseType: 'text' });
  }

  ///////////////////////////////////
// refresh la fomular
////////////////////////////////////
  //  refreshList(id: string){
  //   this.http.get(this.APIUrl + '/getBreeds/' + id)
  //   .toPromise()
  //   .then(res => this.list = res as BreedDTO[]);
  // }
}
