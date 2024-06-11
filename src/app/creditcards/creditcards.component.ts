import { Component, ViewChild } from '@angular/core';
import { CreditCard } from '../models/credit-card';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


const TABLE_DATA: CreditCard[] = [
  {
    id: 1,
    name: 'Bank of America',
    bankName: 'Basnk of America',
    description: 'Bank of America offers customer service and a wide range of products and services.',
    maxCredit: 3000,
    interestRate: 10.5,
    introOffer: true,
    active: true,
    recommendedCreditScore: '700-900',
    numberOfApplications: 2,
    annualFee: 4,
    termsAndConditions: 'Following the terms and conditions',
    createdDate: '2024-31-08',
    updatedDate: '2024-31-08'
  },
  {
    id: 2,
    name: 'Bank of America',
    bankName: 'Basnk of America',
    description: 'Bank of America offers customer service and a wide range of products and services.',
    maxCredit: 3000,
    interestRate: 10.5,
    introOffer: true,
    active: true,
    recommendedCreditScore: '700-900',
    numberOfApplications: 2,
    annualFee: 4,
    termsAndConditions: 'Following the terms and conditions',
    createdDate: '2024-31-08',
    updatedDate: '2024-31-08'
  },
  {
    id: 3,
    name: 'Bank of America',
    bankName: 'Basnk of America',
    description: 'Bank of America offers customer service and a wide range of products and services.',
    maxCredit: 3000,
    interestRate: 10.5,
    introOffer: true,
    active: true,
    recommendedCreditScore: '700-900',
    numberOfApplications: 2,
    annualFee: 4,
    termsAndConditions: 'Following the terms and conditions',
    createdDate: '2024-31-08',
    updatedDate: '2024-31-08'
  },
  {
    id: 4,
    name: 'Bank of America',
    bankName: 'Basnk of America',
    description: 'Bank of America offers customer service and a wide range of products and services.',
    maxCredit: 3000,
    interestRate: 10,
    introOffer: true,
    active: true,
    recommendedCreditScore: '700-900',
    numberOfApplications: 2,
    annualFee: 4,
    termsAndConditions: 'Following the terms and conditions',
    createdDate: '2024-31-08',
    updatedDate: '2024-31-08'
  }
]

@Component({
  selector: 'app-creditcards',
  templateUrl: './creditcards.component.html',
  styleUrls: ['./creditcards.component.scss']
})
export class CreditcardsComponent {
  
  displayColumns = ["select", "id", "name", "bankName", "description", "maxCredit", "interestRate", "introOffer", "active", "recommendedCreditScore", "numberOfApplications", "annualFee", "termsAndConditions", "createdDate", "updatedDate"];

  dataSource = new MatTableDataSource(TABLE_DATA);

  selection = new SelectionModel(true, []);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;  
  }
  
  selectHandler(row: CreditCard) {
    this.selection.toggle(row as never);
  }
}