import { Injectable } from '@angular/core';
import {BehaviorSubject} from'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {

  constructor() { }
  private data=new BehaviorSubject('');
  currentData=this.data.asObservable();
  updateData(item:any){
    this.data.next(item);
  }
}
