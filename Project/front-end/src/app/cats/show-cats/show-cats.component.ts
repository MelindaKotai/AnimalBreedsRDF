import { SharedService } from './../../shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-cats',
  templateUrl: './show-cats.component.html',
  styleUrls: ['./show-cats.component.css']
})
export class ShowCatsComponent implements OnInit {

  constructor(private service:SharedService) { }
  CatsList:any=[];

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  refreshCatsList(){
    this.service.getAnimalsList().subscribe(data=>{
      this.CatsList = data;
    });
  }

}
