class Loan {
    constructor(annualInterestRate, numberOfYears, loanAmount, loanDate) {
        this.annualInterestRate = annualInterestRate;
        this.numberOfYears = numberOfYears;
        this.loanAmount = loanAmount;
        this.loanDate = loanDate;
    }

    getAnnualInterestRate() {
        return this.annualInterestRate;
    }
    getNumberOfYears() {
        return this.numberOfYears;
    }
    getLoanAmount() {
        return this.loanAmount;
    }
    getLoanDate() {
        return this.loanDate;
    }

    setAnnualInterestRate(newAnnualInterestRate) {
        this.annualInterestRate = newAnnualInterestRate
    }
    setNumberOfYears(newNumberOfYears) {
        this.numberOfYears = newNumberOfYears;
    }
    setLoanAmount(newLoanAmount) {
        this.loanAmount = newLoanAmount;
    }
    setLoanDate(newLoanDate) {
        this.loanDate = newLoanDate;
    }

    getMonthlyPayment() {
        let monthlyInterestRate = this.annualInterestRate / 1200;
        let monthlyPayment = this.loanAmount * monthlyInterestRate /
            (1 - 1 / Math.pow(1 + monthlyInterestRate, this.numberOfYears * 12));
        return monthlyPayment;
    }
    getTotalPayment() {
        let totalPayment = this.getMonthlyPayment() * 12 * this.numberOfYears;
        return totalPayment;
    }
}
const loan = new Loan(18, 1, 80000000, new Date());
console.log(loan.getMonthlyPayment())