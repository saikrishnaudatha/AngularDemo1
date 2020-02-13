import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title :string= 'AngularDemo';
  title:string='null';
  num:number=10;
  imagepath:string='assets/images/tom.png'
  name:string="Tom";
  name1:string="Tom2";
  mystyle:string="boldclass italicclass"
  appStyle:boolean=true;

  getname():string
  {
    return this.name
  }
  getname1():string
  {
    this.name=this.name.toUpperCase();
    return this.name+""+this.name1;
  }

}
