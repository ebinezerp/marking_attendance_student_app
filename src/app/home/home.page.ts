import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Student } from '../model/student';
import { StudentService } from '../service/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  studentId: string;
  password: string;


  constructor(private studentService: StudentService, private router: Router) {
  }

  submitted() {
    this.studentService.login(this.studentId, this.password).subscribe(
      (result) => {
        this.router.navigate(['/scanner']).then(
          () => {
          this.studentId = '';
          this.password = '';
        }
        );
      }
    );
  }
}
