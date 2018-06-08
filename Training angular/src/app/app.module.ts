import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StoreComponent } from './component/store/store.component';
import { RegisterComponent } from './component/register/register.component';
import { VariableComponent } from './variable.compoent'

import { RegisterService } from './services/register.service'
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { AccountDetailComponent } from './component/account-detail/account-detail.component';
import { TransferComponent } from './component/transfer/transfer.component';
import { TransferPromptpayComponent } from './component/transfer-promptpay/transfer-promptpay.component';
import { TransferAccountComponent } from './component/transfer-account/transfer-account.component';
import { PromptpayComponent } from './component/promptpay/promptpay.component';
import { DeletePromptpayComponent } from './component/delete-promptpay/delete-promptpay.component';
import { LoginService } from './services/login.service';

const APP_ROUTE: Routes = [
  { path: '', component: LoginComponent },
  { path: 'store', component: StoreComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'acountDetail', component: AccountDetailComponent },
  { path: 'transfer', component: TransferComponent },
  { path: 'transferByAccountNumber', component: TransferAccountComponent },
  { path: 'transferPromptpay', component: TransferPromptpayComponent },


];

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    RegisterComponent,
    LoginComponent,
    AccountDetailComponent,
    TransferComponent,
    TransferPromptpayComponent,
    TransferAccountComponent,
    PromptpayComponent,
    DeletePromptpayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTE),
    HttpClientModule,//new for ang4
  ],
  providers:
    [VariableComponent,
      RegisterService,
    LoginService],
  bootstrap: [AppComponent],
  // exports: [RouterModule]
})
export class AppModule { }
