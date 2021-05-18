import { SharedService } from './../../shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-dogs',
  templateUrl: './show-dogs.component.html',
  styleUrls: ['./show-dogs.component.css']
})
export class ShowDogsComponent implements OnInit {

  constructor(private service:SharedService) { }
  DogsList:any=[];

  ngOnInit(): void {
  }
  refreshDogsList(){
    this.service.getAnimalsList().subscribe(data=>{
      this.DogsList = data;
    });
  }
}
