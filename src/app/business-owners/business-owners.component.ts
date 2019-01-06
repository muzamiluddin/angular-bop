import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm, FormGroupDirective } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Metadata } from 'src/app/shared/metadata';
import { SelectOption } from 'src/app/interfaces/select-option.model';
import { Account } from 'src/app/interfaces/account.model';
import { SubmissionService } from '../bop/services/submission.service';
import { AccountUtil } from '../bop/services/account-util.service';
import { Step } from './enums/step';
import { Transaction } from '../interfaces/transaction.model';
import { getCurrentStep } from './selectors/transaction-selector';
import { Actions } from '@ngrx/effects';
import { TransactionActionTypes } from './actions/transaction.actions';

@Component({
  selector: 'app-business-owners',
  templateUrl: './business-owners.component.html',
  styleUrls: ['./business-owners.component.css']
})
export class BusinessOwnersComponent implements OnInit {
  currentStep = Step.BusinessInfo;
  constructor(private store: Store<Transaction>,
              private actions$: Actions) {

  }

  ngOnInit(): void {
    this.store.pipe(select(getCurrentStep)).subscribe(
      step => {
        this.currentStep = step;
      }
    );

    // this.store.pipe(select('transaction')).subscribe(
    //   transaction => {
    //     console.log( ' Inside of hardcoded step method');
    //   }
    // );


  }

}
