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

  /**
   * Funcion para configurar los headers para realizar el llamado a los sericios
   *
   */
  getParamsHeader(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  /**
   * Funcion para hacer el llamado al servicio de registrar un usuario
   *
   */
  registerUser(user: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const BODY = user;
      const HEADERS = {
        headers: this.getParamsHeader(),
      };

      this.http
        .post<any>(`${this.host}/signup`, BODY, HEADERS)
        .pipe(map((response) => response))
        // tslint:disable-next-line: deprecation
        .subscribe((data) => {
          resolve(data);
        });
    });
  }

  /**
   * Funcion para identificar si el usuario ya esta registrado o no
   *
   */
  isAuthenticated(): boolean {
    const TOKEN = localStorage.getItem('user');
    return TOKEN !== null ? true : false;
  }
}
