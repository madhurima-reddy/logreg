import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
 
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RegisterComponent } from './register/register.component';
import { Registers } from './registers';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private apiServer = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Registers[]> 
  {
    return this.httpClient.get<Registers[]>(this.apiServer + '/register/')
    
  }
  register(registers): Observable<Registers> {
    return this.httpClient.post<Registers>(this.apiServer + '/products/' , JSON.stringify(Registers), this.httpOptions)
    
  }  
}
