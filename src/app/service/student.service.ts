import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  login(studentId: string, password: string): Observable<boolean> {
    const params = { 'studentId': studentId, 'password': password};
    return this.httpClient.post<boolean>('http://localhost:8800/login/std', '', {params});
  }
}
