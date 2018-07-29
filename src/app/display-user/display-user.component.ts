import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("display");
  }

}
