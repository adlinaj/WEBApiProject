import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor(private service:StudentService) { }
  // constructor(private service:StudentService,  private router:ActivatedRoute) { }
  // errormsg:any;
  // successmsg:any;
  // getparamid:any;
  // message:boolean=false;

  addStudent = new FormGroup({
    studId: new FormControl(''),
    name: new FormControl(''),
    course: new FormControl(''),
    semester: new FormControl(''),
    email: new FormControl(''),
    clubId: new FormControl(''),
  });

  message: boolean = false;
  ngOnInit(): void {

  }


    createStudent() {
      console.log(this.addStudent.value);
      this.service.saveStudentsData(this.addStudent.value).subscribe((result) => {
        console.log(result);
        this.message = true;
        this.addStudent.reset({});
      });
    }
  

  // saveStudentsData() {
  //   console.log(this.studentForm.value);

  //   this.service.saveStudentsData(this.studentForm.value).subscribe((result) => {
  //     console.log(result);
  //     this.message=true;
  //     this.studentForm.reset({});
  //   });
  // }

  removeMessage(){
    this.message = false;
  }
}

