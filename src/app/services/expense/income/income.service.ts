import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const Basic_URL = "http://localhost:8080/";
@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  constructor(private http:HttpClient) { }
  postincome(incomeDTO:any):Observable<any>{
    return this.http.post(Basic_URL + "api/income", incomeDTO);
  }
  getAllincomes():Observable<any>{
    return this.http.get(Basic_URL + "api/income/all");
  }
  getIncomeById(id:number):Observable<any>{
    return this.http.get(Basic_URL + `api/income/${id}`);
  }
  updateIncome(id:number,incomeDTO:any):Observable<any>{
    return this.http.put(Basic_URL + `api/income/${id}`,incomeDTO);
  }
  deleteIncome(id:number):Observable<any>{
    return this.http.delete(Basic_URL + `api/income/${id}`);
  }
}
