import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }
  url="https://localhost:44313/api/Users";

  postUser(modal){
    return this._http.post(this.url,modal);
  }
  searchUser(model){
    var filter=this.url +'/FindUser?email=' +model.Email +'&pass='+model.password;
    return this._http.get(filter);
  }
  getUserList(){
    return this._http.get(this.url);
  }
  putUser(model){
    return this._http.put(this.url + '/' +model.userId,model);

  }
  searchUserList(id){
    var filter=this.url +'/FindUserList?id=' +id;
    return this._http.get(filter);
  }
}
