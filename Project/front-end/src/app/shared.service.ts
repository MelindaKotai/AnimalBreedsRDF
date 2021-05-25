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

////////////////
// pentru a putea obtine rasele pentru animalele selectate
/////////////////

///////////////////////////////////////////////
// crearea functiei de obtinere categorii animale
////////////////////////////////////////////////
  getAnimalsList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/getCategories');
  }
  ////////////////////////////////////
  // functie de obtinere rasa
  /////////////////////////////////////
  getBreedsList(id: string): Observable<any[]>{

    const url = this.APIUrl + '/getBreeds/';
    return this.http.get<any>(url + id);


  }
  showBreeds(id: string){

    this.getBreedsList(id).subscribe(data => {
      console.warn(data);
     this.dataBreeds = data;

  }); }

  //////////////////////////////////////////
  // functie de stergere rasa
  /////////////////////////////////////////
    deleteBreed(id: string){
    return this.http.delete(this.APIUrl + '/Delete/' + id);
  }

  //////////////////////////////////////
  // functie de adaugare rasa
  /////////////////////////////////////
    postaddBreed(id: string){

     return this.http.post(this.APIUrl + '/Insert', id);
  }

  ///////////////////////////////////
// refresh la fomular
////////////////////////////////////
   refreshList(){
    this.http.get(this.APIUrl + '/getBreeds')
    .toPromise()
    .then(res => this.list = res as BreedDTO[]);
  }
}
