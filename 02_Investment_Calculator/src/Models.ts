export interface calculatedDataOut {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
}

export interface calculatedDataIn {
    initialInvestment: number;
    duration: number;
    expectedReturn: number;
    annualInvestment: number;
}