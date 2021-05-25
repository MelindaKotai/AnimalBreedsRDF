import { SharedService } from 'src/app/shared.service';
import { AnimalsComponent } from './animals/animals.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { BreedDTO } from './../shared/shared.model';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


/*export class BreedDTO {
  construct( 
    public id: string,
  public  name: string,
   public image:string,
  public  description:string,
   public price:number,
  public hypoalergenic:boolean,
   public categoryId: string,){}
}*/

@Component({
  selector: 'app-breed-details',
  templateUrl: './breed-details.component.html',
  styleUrls: ['./breed-details.component.css']
})
export class BreedDetailsComponent implements OnInit {
public breeds: any[];
public id: string;


  constructor(public service: SharedService, private toastr: ToastrService, private route: ActivatedRoute) {
         // console.log(this.service.dataBreeds);
         this.breeds = this.service.dataBreeds;
         console.log(this.breeds);
   }
 // breed = this.service.dataBreeds;




ngOnInit(): void {
    this.service.refreshList();
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.showBreeds(this.id);
    console.log(this.id);
  }
  /*showBreeds(){
  
    this.service.getBreedsList(this.id).subscribe(data => {
      console.warn(data);
;     this.dataBreeds = data;
    
  });}*/
  
populateForm(selectedRecord: BreedDTO){
    this.service.formData = Object.assign({}, selectedRecord);
  }

onDelete (id: string){
    this.service.deleteBreed(id)
    .subscribe(
      res => {
        this.service.refreshList();
        this.toastr.error('Sters cu succes');
      },
      err => {console.log(err);
      }
    );
  }
}
