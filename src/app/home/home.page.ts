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

  student_id: string;
  password: string;


  constructor(private studentService: StudentService,
    private router: Router) {}

  submitted() {
    this.studentService.login(this.student_id, this.password).subscribe(
      (result) => {
        this.router.navigate(['/scanner']).then(
          () => {
          this.student_id = '';
          this.password = '';
        }
        );
      }
    );
  }
}
