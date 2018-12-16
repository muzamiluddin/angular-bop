import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buttons',
  template: `
  <mat-checkbox>
    <mat-icon>face</mat-icon>
    Check me!
  </mat-checkbox>

  `,
  styles: []
})
export class ButtonsComponent implements OnInit {

  constructor(private router: Router) { }

ngOnInit() {
  console.log('configured routes: ', this.router.config);
}


}
