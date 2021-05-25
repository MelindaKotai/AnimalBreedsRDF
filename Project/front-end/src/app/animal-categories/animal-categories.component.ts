import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-categories',
  templateUrl: './animal-categories.component.html',
  styleUrls: ['./animal-categories.component.css']
})
export class AnimalCategoriesComponent implements OnInit {
data = []
  constructor(private service: SharedService) {
    this.service.getAnimalsList().subscribe(data => {
      console.warn(data)
      this.data = data
    });
   }



  ngOnInit(): void {
  }

}
