import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from '../sharedservice.service';
import{Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 showHeader=false;
  constructor(private _share:SharedserviceService,private _route:Router) { }
   loggedInUser:any={};
  ngOnInit() {
    this._share.currentData.subscribe(data =>{
      if(data!=""){;
        this.showHeader=true;
      this.loggedInUser=data;
      }
    })
    
  }
  logout(){
    this._route.navigate(['./login']);
    this.showHeader=false;
    this.loggedInUser={};
  }

}
