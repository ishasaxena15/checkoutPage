import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutPageComponent } from './component/checkout-page/checkout-page.component';
import { DetailPageComponent } from './component/checkout-page/detail-page/detail-page.component';
import { PaymentPageComponent } from './component/checkout-page/payment-page/payment-page.component';
import { SuccessPageComponent } from './component/checkout-page/success-page/success-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckoutPageComponent,
    DetailPageComponent,
    PaymentPageComponent,
    SuccessPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
