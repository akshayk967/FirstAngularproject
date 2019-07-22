import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMoneyComponent } from './add-money/add-money.component';
import { DoTransactionComponent } from './do-transaction/do-transaction.component';
import { MyTransactionComponent } from './my-transaction/my-transaction.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { LoginComponent } from './login/login.component';
import {HomeComponent} from './home/home.component'
const routes: Routes = [
  {path: '',redirectTo:'/login',pathMatch:'full'},
{path:'addMoney',component:AddMoneyComponent},
{path:'doTransaction',component:DoTransactionComponent},
{path:'myTransaction',component:MyTransactionComponent},
{path:'editProfile',component:EditprofileComponent},
{path:'login',component:LoginComponent},
{path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
