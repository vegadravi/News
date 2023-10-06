import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private serverUrl = 'http://localhost:3000'; 
  constructor(private http: HttpClient) {}
  saveFormData(data: any) {
    const url = `${this.serverUrl}/saveFormData`;
        return this.http.post(url, data);
  }
  getRegistrationData(): Observable<any[]> {
    return this.http.get<any[]>( `${this.serverUrl}/getRegistrationData`);
  }
}
