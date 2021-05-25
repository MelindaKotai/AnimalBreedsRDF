import { BreedDetailsComponent } from './../breed-details.component';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';





@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
  showCategories = false;
  data = [];
  constructor(public service: SharedService) {
   }

  ngOnInit(): void {
  }
  ////////////////////////
  // obtin categoriile animalelor
  ///////////////////////
  getCategories(){
    this.showCategories = true;
    this.service.getAnimalsList().subscribe(data => {
      console.warn(data);
      this.data = data;
  });
}
}
