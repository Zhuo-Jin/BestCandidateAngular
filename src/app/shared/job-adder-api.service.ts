import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IJob, ICandidate } from '../app.interface';

@Injectable({
  providedIn: 'root'
})
export class JobAdderApiService {

  apiUrl:string = "https://bestcandidates-demo.azurewebsites.net/api/jobs";
       
  constructor(private http:HttpClient) { 
  }
  

  
  getAllJobs() : Observable<IJob[]>{
    return this.http.get<IJob[]>(this.apiUrl);
  }

}
