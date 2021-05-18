import { Injectable } from '@angular/core';
import{HttpClient} from'@angular/common/http';
import{Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="https://localhost:5001/Api";
  constructor(private http:HttpClient) { }

  getAnimalsList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/getCategories');
  }
  getBreedsList(val:any){
    return this.http.get(this.APIUrl+'/getBreeds/'+val);
  }
  deleteBreed(val:any){
    return this.http.delete(this.APIUrl+'/Delete/'+val);
  }
  addBreed(val:any){
    return this.http.post(this.APIUrl+'/Insert',val);
  }
}
