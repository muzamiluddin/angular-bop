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

@Component({
  selector: 'app-business-owners',
  templateUrl: './business-owners.component.html',
  styleUrls: ['./business-owners.component.css']
})
export class BusinessOwnersComponent implements OnInit {
  currentStep = Step.BusinessInfo;
  ngOnInit(): void {
    this.currentStep = Step.BusinessInfo;

  }

}
