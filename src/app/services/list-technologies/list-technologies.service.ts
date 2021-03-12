import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ListTechnologiesService {
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
   * Funcion para hacer el llamado al servicio de obtener todas las tecnologias
   *
   */
  getListTechnologies(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .get<any>(`${this.host}/techs`)
        .pipe(map((response) => response))
        // tslint:disable-next-line: deprecation
        .subscribe((data) => {
          resolve(data);
        });
    });
  }
}
