import { Component, inject, signal } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  enteredInitialInvestment = signal('0');
  enteredAnnualInvetment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  investmentService=inject(InvestmentService);

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredAnnualInvetment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvetment(),
    });
    this.enteredAnnualInvetment.set('0');
    this.enteredInitialInvestment.set('0');
    this.enteredDuration.set('10');
    this.enteredExpectedReturn.set('5')
  }
}
