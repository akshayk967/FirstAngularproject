import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from '../sharedservice.service';
import { TransactionService } from '../transaction.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-my-transaction',
  templateUrl: './my-transaction.component.html',
  styleUrls: ['./my-transaction.component.css']
})
export class MyTransactionComponent implements OnInit {
loggedInUser:any={};
TransactionList:any=[];
  constructor(private _userService:UserService,private _sharedService:SharedserviceService,private _transaction:TransactionService) { }
  

  ngOnInit() {
    this._sharedService.currentData.subscribe(data=>{
      this.loggedInUser=data})

       this._transaction.getUserTransactionList(this.loggedInUser.userId).subscribe(data =>{
       this.TransactionList=data 
      },
       error=>{
         alert("Not able to fetch Content")
       
      


  })

}}
