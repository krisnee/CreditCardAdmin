import { Component } from '@angular/core';
import { CreditCard } from 'src/app/models/credit-card';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  newCreditCard: CreditCard = {
      id: undefined,
      name: "",
      bankName: "",
      description: "",
      maxCredit: 5000,
      interestRate: 12,
      introOffer: true,
      active: true,
      recommendedCreditScore: "100-500",
      numberOfApplications: 1,
      annualFee: 12,
      termsAndConditions: "Terms and Conditions for the Credit Card",
      createdDate: Date(),
      updatedDate: Date()
    }
  
  saveCreditCard() {
    console.log("Form Submitted");
    console.log(this.newCreditCard);
  }
}