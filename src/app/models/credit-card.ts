export interface CreditCard {
    id: number | undefined; 
    name: string;
    bankName: string;
    description: string;
    maxCredit: number;
    interestRate: number;
    introOffer: boolean;
    active: boolean;
    recommendedCreditScore: string;
    numberOfApplications: number;
    annualFee: number;
    termsAndConditions: string;
    createdDate: string;
    updatedDate: string;   
}
