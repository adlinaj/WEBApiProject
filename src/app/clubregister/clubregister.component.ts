import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-clubregister',
  templateUrl: './clubregister.component.html',
  styleUrls: ['./clubregister.component.css']
})
export class ClubregisterComponent implements OnInit {

  constructor(private service: StudentService) { }

  addStudent = new FormGroup({
    studentName: new FormControl(''),
    studentCourse: new FormControl(''),
    studentSemester: new FormControl(''),
    studentEmail: new FormControl(''),
    studentClub: new FormControl(''),

  });

  message: boolean = false;
  ngOnInit(): void {
  }

  // createStudents() {
  //   console.log(this.addStudent.value);
  //   this.service.saveStudentsData(this.addStudent.value).subscribe((result) => {
  //     console. bblog(result);
  //     this.message = true;
  //     this.addStudent.reset({});
  //   });
  // }

  removeMessage() {
    this.message = false;
  }
}
