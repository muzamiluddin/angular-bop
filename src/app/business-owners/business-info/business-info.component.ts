import { Component, OnInit } from '@angular/core';
import { SelectOption } from 'src/app/interfaces/select-option.model';
import { SubmissionService } from 'src/app/bop/services/submission.service';
import { Router } from '@angular/router';
import { Metadata } from 'src/app/shared/metadata';
import { AccountUtil } from 'src/app/bop/services/account-util.service';
import { Store, select } from '@ngrx/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Account, NEW_ACCOUNT } from 'src/app/interfaces/account.model';
import { ActionType } from '../enums/action-type';
import { AccountState } from '../app.state';
import { CreateAccount } from '../actions/account.actions';

@Component({
  selector: 'app-business-info',
  templateUrl: './business-info.component.html',
  styleUrls: ['./business-info.component.css']
})
export class BusinessInfoComponent implements OnInit {
  // TODO: To be changed to strong type
  sub: any;
  accountForm;
  additionalInfoForm;
  step: String = 'BusinessInfo';
  formStatus: boolean;
  mockData;
  organizationList: SelectOption[];
  industryList: SelectOption[];
  stateList: SelectOption[];
  account: Account =  NEW_ACCOUNT;

  constructor(private submissionService: SubmissionService,
    private router: Router,
    private metadata: Metadata,
    private accountUtil: AccountUtil,
    private store: Store<AccountState>
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
      }),
      email: new FormControl(this.account.email, [Validators.email]),
      phone: new FormControl(this.account.phone),
      fein: new FormControl(this.account.fein),
      organizationType: new FormControl(this.account.organizationType, [Validators.required]),
      industryCode: new FormControl(this.account.industryCode, [Validators.required])
    });
  }

  ngOnInit() {
    this.setMetadata();
    this.initAccountForm();
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy(): void {
    //    this.sub.unsubscribe();
  }

  validateAndNext() {
    if (!this.accountForm.valid) {
      return;
    }

    this.store.dispatch(new CreateAccount(this.accountForm.value));

  }

  setMetadata() {
    this.organizationList = this.metadata.organizationList;
    this.industryList = this.metadata.industryList;
    this.stateList = this.metadata.stateList;
  }

}
