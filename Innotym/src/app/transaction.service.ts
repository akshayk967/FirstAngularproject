import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from'rxjs';
import { ITransaction } from 'ITransaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  url="https://localhost:44313/api/transactions";
  constructor(private _http:HttpClient) { }

  postTransaction(model){
    return this._http.post(this.url,model);
  }
  getUserTransactionList(id):Observable<ITransaction[]>{
    var filter=this.url+'/GetUserTransaction?userId='+id;
  return this._http.get<ITransaction[]>(filter);  }
}
