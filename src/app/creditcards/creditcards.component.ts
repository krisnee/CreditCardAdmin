import { Component, ViewChild } from '@angular/core';
import { CreditCard } from '../models/credit-card';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CreditcardsService } from '../services/creditcards.service';


@Component({
  selector: 'app-creditcards',
  templateUrl: './creditcards.component.html',
  styleUrls: ['./creditcards.component.scss']
})
export class CreditcardsComponent {
  
  creditcards: CreditCard[] = [];

  creditCardMaximumAmount: number = 0;
  creditCardMaximumInterest: number = 0;
  creditCardReccomendedCreditScore: number = 0;
  creditCardActive: number = 0;
  
  constructor(private creditcardsService: CreditcardsService) {
    this.creditcardsService.getCreditCards().subscribe((data:CreditCard[]) => {
      this.creditcards = data;

      this.dataSource = new MatTableDataSource(this.creditcards);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      this.calculateMetrics();
    })
  }

  dataSource = new MatTableDataSource(this.creditcards);

  displayColumns = ["select", "id", "name", "bankName", "description", "maxCredit", "interestRate",  "active", "recommendedCreditScore", "createdDate", "updatedDate", "actions"];

  //"introOffer", "numberOfApplications", "annualFee", "termsAndConditions",

  selection = new SelectionModel(true, []);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  selectHandler(row: CreditCard) {
    this.selection.toggle(row as never);
  }
  calculateMetrics() {
    console.log(this.creditcards)
    this.creditCardMaximumAmount = this.creditcards.filter(card => card.maxCredit > 3000).length;
    this.creditCardMaximumInterest = this.creditcards.filter(card => card.interestRate < 11.5).length;
    this.creditCardReccomendedCreditScore = this.creditcards.filter(card => card.recommendedCreditScore == "500-700").length;
    this.creditCardActive = this.creditcards.filter(card => card.active == false).length;
    }
  }