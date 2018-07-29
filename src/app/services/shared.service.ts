import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

  constructor() { }

  public userData: any = [];

  setUserData(user){
    this.userData.push(user);
  }

  getUserData(){
    return this.userData;
  }

}
