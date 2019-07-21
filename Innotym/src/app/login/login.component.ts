import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {Router} from '@angular/router';
import { SharedserviceService } from '../sharedservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginDetails={};
signupDetails={};
showLogin:boolean=false;
showSignup:boolean=true;

  constructor(private _userService:UserService,private _router:Router,private _share:SharedserviceService) { }
 

  ngOnInit() {
  }
  login(){
    this._userService.searchUser(this.loginDetails).subscribe(data=>{
      this._share.updateData(data);
      this._router.navigate(['./home']);

    },
    error =>{
      alert("login Fail");
    
    })
  }
      signup(){
        this._userService.postUser(this.signupDetails).subscribe(result =>{
          if(result){
            alert("signup Sucess");
          }
          else{
            alert("signup Fail");
          }
          
          console.log(result);

        });
      }
  }


