import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm, FormGroupDirective } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Metadata } from 'src/app/shared/metadata';
import { SelectOption } from 'src/app/interfaces/select-option.model';
import { Account } from 'src/app/interfaces/account.model'
import { SubmissionService } from '../bop/services/submission.service';
//import { AccountUtil } from '../services/account-util.service';

@Component({
  selector: 'app-business-owners',
  templateUrl: './business-owners.component.html',
  styleUrls: ['./business-owners.component.css']
})
export class BusinessOwnersComponent implements OnInit {
  sub: any; //TODO: To be changed to strong type
  accountForm;
  additionalInfoForm;
  step: string = 'BusinessInfo'
  formStatus: boolean;
  mockData;
  organizationList: SelectOption[];
  industryList: SelectOption[];
  stateList: SelectOption[];
  account: Account = {
    name: '',
    address: {
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      postalCode: ''
    },
    email: '',
    phone: '',
    fein: '',
    organizationType: '',
    industryCode: ''
  }

  constructor(private submissionService: SubmissionService,
    private router: Router,
    private metadata: Metadata,
//    private accountUtil: AccountUtil,
//    private store: Store<any>
) { }

  initAccountForm() {
    this.accountForm = new FormGroup({
      name: new FormControl(this.account.name, [Validators.required]),
      address: new FormGroup({
        addressLine1: new FormControl(this.account.address.addressLine1, [Validators.required]),
        addressLine2: new FormControl(this.account.address.addressLine2),
        city: new FormControl(this.account.address.city, [Validators.required]),
        postalCode: new FormControl(this.account.address.postalCode, [Validators.required]),
        state: new FormControl(this.account.address.state, [Validators.required])
      })
    });
  }

  initAdditionalInfoForm() {
    // Initiate additional account info form
    this.additionalInfoForm = new FormGroup({
      email: new FormControl(this.account.email, [Validators.email]),
      phone: new FormControl(this.account.phone),
      fein: new FormControl(this.account.fein),
      organizationType: new FormControl(this.account.organizationType, [Validators.required]),
      industryCode: new FormControl(this.account.industryCode, [Validators.required])
    });
  }

  dispatchCurrentStatus() {
    // Dispatch event related to loading of business info screen
 /*   this.store.dispatch({
      type: 'INIT_BUSINESS_INFO',
      payload: 'dummy payload'
    })
    */
  }

  ngOnInit() {

    this.setMetadata();
    this.initAccountForm();
    this.dispatchCurrentStatus();
    this.initAdditionalInfoForm();
//    this.fetchAccount();
/*    this.store.pipe(select('account')).subscribe(account => {
      if (this.account) {
        // Initiate account Form
        this.account = account;
        this.initAccountForm();
        this.initAdditionalInfoForm();
      }
      console.log('Initializing account from store');
    });
    */
  }

  ngOnDestroy(): void {
//    this.sub.unsubscribe();
  }

  nextStep() {
    if (this.step == 'BusinessInfo') {
      if (!this.accountForm.valid) {
        return;
      }
      this.step = 'AdditionalBusinessDetails'
    }
  }

  prevStep() {
    if (this.step == 'AdditionalBusinessDetails') {
      this.step = 'BusinessInfo'
    }
  }

  createAccountAndSubmission() {
    if (!this.accountForm.valid || !this.additionalInfoForm.valid) {
      console.log("Form is invalid");
      return;
    }

    this.submissionService.createAccountSubmission(this.accountForm.value).subscribe((data) => {
      console.log("Account and submission created");
      console.log(data);
    })

    this.router.navigate(['/bop/eligibility']);

  }

  dispatchDummyEvent() {
    //this.account = this.accountUtil.setAccountInfo(this.account, this.accountForm.value)
    //this.store.dispatch({ type: 'INIT_BUSINESS_INFO', payload: this.account })
  }

  callMockService() {
    this.submissionService.getMetadata().subscribe((data) => {
      console.log("Metadata received from PC is")
      console.log(data);
      this.mockData = data;
    })
  }

  setMetadata() {
    this.organizationList = this.metadata.organizationList;
    this.industryList = this.metadata.industryList;
    this.stateList = this.metadata.stateList;
  }

}
