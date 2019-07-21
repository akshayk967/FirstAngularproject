import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { SharedserviceService } from '../sharedservice.service';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-do-transaction',
  templateUrl: './do-transaction.component.html',
  styleUrls: ['./do-transaction.component.css']
})
export class DoTransactionComponent implements OnInit {
userList:any=[];
loggedInUser:any={};
transactionData:any={};
debitUserObj:any={};
debitTransaction:any={};
creditTransaction:any={};

  constructor(private _sharedService:SharedserviceService,private _userService:UserService,private _transactionService:TransactionService) { }

  ngOnInit() {
    this._sharedService.currentData.subscribe(data=>{
      this.loggedInUser=data;
    })
    this._userService.searchUserList(this.loggedInUser.userId).subscribe(data =>{
      this.userList=data;
      console.log(this.userList)
    },
    error =>{
      alert(error);
    })
    
    
  }
  
  transferAmount(){
  if(this.loggedInUser.amount>this.transactionData.amount){
    var debitUserinitamt=this.loggedInUser.amount
    this.loggedInUser.amount=this.loggedInUser.amount- this.transactionData.amount;
    this._userService.putUser(this.loggedInUser).subscribe(data =>{
      alert("Debit user details updte success");
       
      this.transactionData.refUser.amount=this.transactionData.refUser.amount +parseInt(this.transactionData.amount);
      this._userService.putUser(this.transactionData.refUser).subscribe(data =>{
        alert("credit user deatils update success");
        //create transaction (debit)
          
          this.debitTransaction.userId=this.loggedInUser.userId;
         this. debitTransaction.refId=this.transactionData.refUser.userId;
          this.debitTransaction.transferAmount=this.transactionData.amount;
          this.debitTransaction.initialAmount=debitUserinitamt;
          this.debitTransaction.date=new Date();
          this.debitTransaction.transactionType="Debit";
          this._transactionService.postTransaction(this.debitTransaction).subscribe(data =>{
          alert("Success Debitting")
        
          this.creditTransaction.userId=this.loggedInUser.userId;
         this. creditTransaction.refId=this.transactionData.refUser.userId;
          this.creditTransaction.transferAmount=this.transactionData.amount;
          this.creditTransaction.initialAmount=debitUserinitamt;
          this.creditTransaction.date=new Date();
          this.creditTransaction.transactionType="Credit";
          this._transactionService.postTransaction(this.creditTransaction).subscribe(date=>{
            alert("Transaction Successful")
          },
          error=>{
            alert("Transaction Unsuccessful")

          
          })
        },
          error=>{
          alert("Failed")});
      },
      error =>{
        alert("credit user details update fail");
      })


    },
    error =>{
  alert("Debit user details update fail");
    
    })
    
  }
  else{
    alert("insufficient balance");
  }
  
  }
}
