import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm, FormGroupDirective } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { SubmissionService } from '../services/submission.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-business-info',
  templateUrl: './business-info.component.html',
  styleUrls: ['./business-info.component.css']
})
export class BusinessInfoComponent implements OnInit {

  accountForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    address: new FormGroup({
      addressLine1: new FormControl('', [Validators.required]),
      addressLine2: new FormControl(),
      city: new FormControl('', [Validators.required]),
      postalCode: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required])
    }),
    email: new FormControl('', [Validators.email]),
    phone: new FormControl(),
    fein: new FormControl(),
    organizationType: new FormControl('', [Validators.required]),
    industryCode: new FormControl('', [Validators.required])
  });
  step : string = 'BusinessInfo'
  formStatus : boolean;
  mockData;



  constructor(private submissionService: SubmissionService) { }

  ngOnInit() {
    this.callMockService();
  }

  nextStep(){
    if (this.step == 'BusinessInfo') {
      this.step = 'AdditionalBusinessDetails'
    } 
  }

  prevStep(){
    if (this.step == 'AdditionalBusinessDetails') {
      this.step = 'BusinessInfo'
    }
  }

  createAccountAndSubmission(){
    console.log(' inside of creation of account and submission');
    if (!this.accountForm.valid) {
      console.log("Form is invalid");
      return;
    }



  }

  callMockService(){
    this.submissionService.getMetadata().subscribe((data) => {
      console.log("Metadata received from PC is")
      console.log(data);
      this.mockData = data;
    })
  }

}
