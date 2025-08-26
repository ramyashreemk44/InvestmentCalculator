import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { BrowserModule } from "@angular/platform-browser";
import { InvestmentResltsComponent } from "./investment-reslts/investment-reslts.component";
import { UserModule } from "./user-input/user.module";

@NgModule({
    declarations:[AppComponent,HeaderComponent,InvestmentResltsComponent],
    imports:[BrowserModule,UserModule],
    bootstrap:[AppComponent]
})
export class AppModule{

}