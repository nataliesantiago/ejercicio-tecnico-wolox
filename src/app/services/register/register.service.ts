import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  host = environment.URL_BACK;

  constructor(private http: HttpClient) {}

  getParamsHeader(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  getUsers() {
    return this.http.get<any>(`${this.host}/get-users`).pipe(
      map((response) => {
        return response['users'];
      })
    );
  }

  registerUser(user: any) {
    return new Promise((resolve, reject) => {
      const BODY = user;
      const HEADERS = {
        headers: this.getParamsHeader(),
      };
      
      this.http
        .post<any>(`${this.host}/signup`, BODY, HEADERS)
        .pipe(map((response) => response))
        .subscribe((data) => {
          resolve(data);
        });
    });
  }
}
