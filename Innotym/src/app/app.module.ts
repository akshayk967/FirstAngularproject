import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import{HttpClientModule} from '@angular/common/http';
import{FormsModule} from '@angular/forms';
import { AddMoneyComponent } from './add-money/add-money.component';
import { MyTransactionComponent } from './my-transaction/my-transaction.component';
import { DoTransactionComponent } from './do-transaction/do-transaction.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { HomeComponent } from './home/home.component';

import { SharedserviceService } from './sharedservice.service';
import { TransactionService } from './transaction.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AddMoneyComponent,
    MyTransactionComponent,
    DoTransactionComponent,
    EditprofileComponent,
    HomeComponent
    
  ],
  imports: [HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserService,SharedserviceService,TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
