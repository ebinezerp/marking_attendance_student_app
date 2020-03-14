import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  login(studentId: string, password: string): Observable<boolean> {
    alert(studentId + ' ' + password);
    const params = { 'studentId': studentId, 'password': password};
    return this.httpClient.post<boolean>('http://13.233.161.239:8080/attendance-rest-api/login/std', '', {params});
  }
}
