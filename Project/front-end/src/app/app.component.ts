import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';
  ActivateShowCategories = false;
  // tslint:disable-next-line: typedef
  showCategories(){
    this.ActivateShowCategories = true;
  }
}
