import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-insert-animals',
  templateUrl: './insert-animals.component.html',
  styleUrls: ['./insert-animals.component.css']
})
export class InsertAnimalsComponent implements OnInit {
Animal:any[];
 // constructor(private service: SharedService) {
    // tslint:disable-next-line: deprecation
    // this.service.getAnimalsList().subscribe(data => {
    //  this.Animal = data;
   //}
  //}
  constructor(){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
function ngOnInit(): null {
  throw new Error('Function not implemented.');
}

