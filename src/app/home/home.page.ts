import { Component } from '@angular/core';
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
        alert('result' + result);
        this.router.navigate(['/scanner']).then(
          () => {
          alert('scanner');
          this.studentId = '';
          this.password = '';
        });
      },
      (error) => {
        alert(error);
        console.log(error);
      }
    );
  }
}
