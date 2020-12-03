import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class SendEmailService {
    constructor( private http: HttpClient) {

    }

    postEmail(email: String, message: String): Observable<string>{

        let headers = new HttpHeaders({ 
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
  
        });

        let options = {
            headers: headers
         }
  
        let url = "https://formspree.io/f/xzbkawal";
  
        let data = `email=${email}&message=${message}`;
  
        return this.http.post(url, data, options)
        .pipe(map((response: any) => {
          return response.ok;
        }))
        
      }

}