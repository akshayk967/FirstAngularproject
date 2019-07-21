import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  url="https://localhost:44313/api/transactions";
  constructor(private _http:HttpClient) { }

  postTransaction(model){
    return this._http.post(this.url,model);
  }
}
