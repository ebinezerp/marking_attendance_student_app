import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarkAttendanceService {

  constructor() { }

  markAttendance(scannedData: string) {
    alert(scannedData);
  }

}
