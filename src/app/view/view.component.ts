import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  // listData:any = [];


  constructor(private service: StudentService) { }
  listData: any;
  successmsg: any;

  ngOnInit(): void {
    this.getAllStudent();
  }

  getAllStudent() {
    this.service.getAllStudents().subscribe((res) => {
      console.log(res, "res==")
      this.listData = res.data;
    });
  }

  //delete id
  deleteStudent(id: any) {
    console.log(id, 'deleteid==>');
    this.service.deleteStudent(id).subscribe((res) => {
      console.log(res, 'deleteres==>');
      this.successmsg = res.message;
      this.getAllStudent();

    });

  }


}
