import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  displayDetails = false;
  logClick = [];

  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onToggleDisplay(){
    this.displayDetails = !this.displayDetails;
    this.logClick.push(this.logClick.length + 1);
  }



}
