import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CreditCard } from 'src/app/models/credit-card';
import { CreditcardsService } from 'src/app/services/creditcards.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  constructor(private creditcardsService: CreditcardsService,
    private router: Router) { 
  }

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
    this.creditcardsService.createCreditCard(this.newCreditCard).subscribe(data => {
      alert("Credit Card Added");
      this.router.navigate(['/creditcards']);
    })
  }
}