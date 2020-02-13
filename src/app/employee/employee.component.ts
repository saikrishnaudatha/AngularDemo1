import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent  {
firstName:string="Tom";
lastName:string="T";
Email:string="tom@cts.com";
Age:number=10;
getStyle()
{
  let styles={"font-style":"italic","color":"green"}
  return styles;
}
}
onclick()
{
  console.log("You clicked");
}
