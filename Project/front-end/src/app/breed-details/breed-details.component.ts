import { SharedService } from 'src/app/shared.service';

import { ToastrService } from 'ngx-toastr';
import { BreedDTO } from './../shared/shared.model';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';


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
  showCategories: boolean = false;
  data = [];


  constructor(public service: SharedService, private toastr: ToastrService, private route: ActivatedRoute) {
   }

 getCategories(){
  this.showCategories = true;
  this.service.getAnimalsList().subscribe(data => {
    this.data = data;
  });
 }

ngOnInit(): void {
  }

  resetForm(form: NgForm){
    form.form.reset();
    this.service.formData = new BreedDTO();
  }

   insertRecord(form: NgForm){
     this.service.formData.categoryId = this.service.currentAnimal;
     this.service.formData.price = +this.service.formData.price;
     this.service.formData.hypoalergenic = !!this.service.formData.hypoalergenic;
     this.service.postaddBreed(this.service.formData).subscribe(
       res => {
         this.resetForm(form);
         this.toastr.success('Au fost introduse cu succes', 'Detalii rasa');
         this.changeBreeds(this.service.currentAnimal);
         
       },
       err => {
        console.log(err);
        alert(err.error); }
     ); }


  changeBreeds(item){
    this.service.currentAnimal = item;
    this.service.showBreeds(item).subscribe(data => {
      this.breeds = data;
    });
  }



onDelete (id: string){
  console.log(id);
    this.service.deleteBreed(id)
    .subscribe(
      res => {
        this.toastr.error('Sters cu succes');
        this.changeBreeds(this.service.currentAnimal);
        
      },
      err => {console.log(err);
      }
    );
  }


  // populateForm(selectedRecord: BreedDTO){
  //   this.service.formData = Object.assign({}, selectedRecord);
  // }
}
