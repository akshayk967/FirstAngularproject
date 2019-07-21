import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from '../sharedservice.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.component.html',
  styleUrls: ['./add-money.component.css']
})
export class AddMoneyComponent implements OnInit {
 amount;
 loggedInUser:any={};
 showSuccess=true;
 showError=true;
  constructor(private _share:SharedserviceService,private _userService:UserService) { }

  ngOnInit() {
    this._share.currentData.subscribe(data=> {
      this.loggedInUser=data;
    })
  }
addMoney(){
  this.loggedInUser.amount=this.loggedInUser.amount+this.amount;
  this._userService.putUser(this.loggedInUser).subscribe(data=>{
    alert("update sucess");
  },
  error =>{
  })
  
}
}
