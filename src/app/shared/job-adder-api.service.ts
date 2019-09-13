import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IJob, ICandidate } from '../app.interface';

@Injectable({
  providedIn: 'root'
})
export class JobAdderApiService {

  apiUrl:string = "https://private-76432-jobadder1.apiary-mock.com/jobs";
       
  constructor(private http:HttpClient) { 
  }

  
  getAllJobs() : Observable<IJob[]>{
    return this.http.get<IJob[]>(this.apiUrl);
  }

}
