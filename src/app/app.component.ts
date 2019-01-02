import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {

    //this.store.pipe(select('account')).subscribe(data => {
    //  console.log("receiving information in root component" + data);
    //});
    
  }

  constructor(private router: Router){
  }


}
