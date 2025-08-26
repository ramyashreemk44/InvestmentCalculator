import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';
import type { InvestmentInput } from '../investment-inpt.model';

@Component({
  selector: 'app-investment-reslts',
  standalone: false,
  templateUrl: './investment-reslts.component.html',
  styleUrl: './investment-reslts.component.css'
})
export class InvestmentResltsComponent {
private investmentService=inject(InvestmentService)

get results(){return this.investmentService.resultsData;}
}
