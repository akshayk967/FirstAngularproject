import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
userList:any=[];
  constructor(private _userService:UserService) { }

  ngOnInit() {
    this._userService.getUserList().subscribe(data =>{
      this.userList=data;
    })
  }


}
