import { HttpClient } from '@angular/common/http';
import { BreedDTO } from './../../shared/shared.model';
import { SharedService } from './../../shared.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

import { ToastrModule, ToastrService } from 'ngx-toastr';





@Component({
  selector: 'app-breed-details-form',
  templateUrl: './breed-details-form.component.html',
  styleUrls: ['./breed-details-form.component.css']
})
export class BreedDetailsFormComponent implements OnInit {

  constructor(public service: SharedService, private toastr: ToastrService) {
   
   }

 
  ngOnInit(): void {
  }

  /*insert_breed(form: NgForm) {
    if (this.service.formData.id == '')
      this.insertRecord(form);
      else
      this.updateRecord(form);


 }*/
 resetForm(form: NgForm){
  form.form.reset();
  this.service.formData = new BreedDTO();
}

 insertRecord(form: NgForm){
   this.service.postaddBreed(this.service.formData.name).subscribe(
     res => {
       this.resetForm(form);
       this.toastr.success('Au fost introduse cu succes', 'Detalii rasa');
     },
     err => {console.timeLog(err); }
   ); }

  /* updateRecord(form: NgForm){

   }*/
   

}
 
