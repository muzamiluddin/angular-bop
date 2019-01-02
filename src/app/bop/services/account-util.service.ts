import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AccountUtil {
  constructor(){

  }

  setAccountInfo(account, viewValue){
    return account;
  }
}