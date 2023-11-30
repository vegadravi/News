import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private accessKey = '2818b5dbcf4491fea552e8af8f9fe43e';
  private apiToken ='hmktbnntjozy4yzU7Zy8HDj87q18mRbVsJRkcRlN';
  private API_URL = 'https://www.googleapis.com/youtube/v3/search';
  private API_KEY = 'AIzaSyAzJHCavqsDgrbBauiyECDHWXNMrmgPdxU';
  
  data:any|{};
  constructor(private http: HttpClient) { }

  getNews(categories: string): Observable<any> {
    const url = `http://api.mediastack.com/v1/news?access_key=${this.accessKey}&categories=${categories}`;
    return this.http.get(url).pipe(
      catchError((error) => {
        // Handle the error here
        console.log('Error:', error);
        return throwError(error);
      }),
      map((response) => {
        console.log('R4x data',response);
        if ((response as any).data) {
          (response as any).data = (response as any).data.filter((item:any) => item.image && !item.image.corrupted);
        }
        return response;
      })
    );
  }
  
  getSearchNews(keywords: string): Observable<any> {
    const url = `http://api.mediastack.com/v1/news?access_key=${this.accessKey}&keywords=${keywords}`;
    return this.http.get(url).pipe(
      catchError((error) => {
        // Handle the error here
        console.log('Error:', error);
        return throwError(error);
      }),
      map((response) => {
        if ((response as any).data) {
          (response as any).data = (response as any).data.filter((item:any) => item.image && !item.image.corrupted);
        }
        return response;
      })
    );

  }
  
  getCountryNews(country: string): Observable<any> {
    const url = `http://api.mediastack.com/v1/news?access_key=${this.accessKey}&countries=${country}`;
    
       return this.http.get(url).pipe(
      catchError((error) => {
        // Handle the error here
        console.log('Error:', error);
        return throwError(error);
      }),
      map((response) => {
        if ((response as any).data) {
          (response as any).data = (response as any).data.filter((item:any) => item.image && !item.image.corrupted);
        }
        return response;
      })
    );
  }

  getFinancialNews(): Observable<any> {
    const url = `https://api.marketaux.com/v1/news/all?industries=Financial&filter_entities=true&api_token=${this.apiToken}`;
    return this.http.get(url)
  }

  getVideos(query: string): Observable <any> {
    const url = `${this.API_URL}?q=${query}&key=${this.API_KEY}&part=snippet&type=video&maxResults=20`;
    return this.http.get(url)
      .pipe(
        map((response: any) => response.items)
      );
  }
   
}