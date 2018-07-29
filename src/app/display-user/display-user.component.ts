import { Component, OnInit } from '@angular/core';
import { SharedService } from './../services/shared.service';

@Component({
  selector: 'display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {

  userData: any = [];
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.userData = this.sharedService.getUserData();
  }

}
