import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  displaySideNav = false;
  href: string = ''
  constructor() { }

  ngOnInit() {
  }

  isCurrentScreen(screenName){
    
    if (this.href.includes('eligibility') && screenName == 'eligibility'){
      return true;
    }

    if (this.href.includes('businessInfo') && screenName == 'businessInfo'){
      return true;
    }

    if (screenName == 'BusinessInfo' ){
      return true;
    }

  }
}
