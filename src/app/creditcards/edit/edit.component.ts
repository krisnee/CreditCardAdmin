import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { CreditCard } from 'src/app/models/credit-card';
import { CreditcardsService } from 'src/app/services/creditcards.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  editCreditCardForm!: FormGroup;
  
  creditCardData: CreditCard | null = null;

  private destroy$ : Subject<void> = new Subject<void>();

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private creditcardsService: CreditcardsService) { 

      this.editCreditCardForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        bankName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        description: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        maxCredit: ['',[Validators.required, Validators.min(1000), Validators.max(100)]],
        interestRate: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
        introOffer: [''],
        active: [false, [Validators.required]],
        recommendedCreditScore: [null, [Validators.required]],
        numberOfApplications: [''],
        annualFee: ['',[Validators.required]],
        termsAndConditions: ['', [Validators.required]],
        createdDate: ['', [Validators.required]],
        updatedDate: ['', [Validators.required]],
      });
  }
  ngOnInit(){
    const id = parseInt(this.route.snapshot.paramMap.get("id")|| '');

    if(id !== 0) {
      this.creditcardsService.getCreditCardById(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.creditCardData = data;

        this.editCreditCardForm.patchValue(this.creditCardData);
      });
    }
  }
  onSubmit() {
    if(this.editCreditCardForm.valid) {
      const updatedFormData: CreditCard = this.editCreditCardForm.value;
      
      this.creditcardsService.updateCreditCard(updatedFormData)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.showSuccessMessage("Credit Card Updated Successfully");
      });
    }
  }
    showSuccessMessage(message: string) {
      this.snackBar.open(message, 'Close', {
        duration: 3000
      });
    }
    ngOnDestory(){
      this.destroy$.next();
      this.destroy$.complete();
    }
}