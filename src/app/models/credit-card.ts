export interface CreditCard {
    id: number | undefined; 
    name: string;
    bankName: string;
    description: string;
    maxCredit: number;
    interestRate: number;
    active: boolean;
    recommendedCreditScore: string;
    annualFee: number;
    termsAndConditions: string;
    createdDate: string;
    updatedDate: string;   
}
