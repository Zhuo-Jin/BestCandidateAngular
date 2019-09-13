import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICandidate } from '../app.interface';

@Injectable({
  providedIn: 'root'
})
export class BestCandidateApiService {

  apiUrl = 'https://bestcandidates-demo.azurewebsites.net/api/jobs/getcandidatebyjobid/';
  
  constructor(private http:HttpClient) { 

  }

  getCandidatesFromJobId(jobId:number) : Observable<ICandidate[]>{
    return this.http.get<ICandidate[]>(this.apiUrl + jobId);
  }

}
