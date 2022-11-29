import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'


const delStudentsUrl = "http://localhost:8888/students/del";
const addStudentUrl = "http://localhost:8888/student/add";
const editStudentUrl = "http://localhost:8888/students/put";
const baseStudentUrl = "http://localhost:8888/students";
const getIdUrl = "http://localhost:8888/students/id";
const StudentUrl = "http://localhost:8888/allstudents";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }
  //url = "http://localhost:8888/allstudents";

  getAllStudents(): Observable<any> {
    const url = "http://localhost:8888/allstudents"
    return this.http.get<any>(url)
  }
  saveStudentsData(student: any): Observable<any> {
    console.log(student, 'createapi=>');
    return this.http.post(addStudentUrl, student);
  }

  deleteStudent(id: any): Observable<any> {
    return this.http.delete(`${delStudentsUrl}/${id}`);
  }

  getStudentById(id: any): Observable<any> {
    return this.http.get(`${getIdUrl}/${id}`);
  }

  updateStudentData(id:any, student:any): Observable<any> {
    return this.http.put(`${editStudentUrl}/${id}`, student);
  }

 // get one class only
 getStudent(id:any):Observable<any>{
  return this.http.get(`${StudentUrl}/${id}`);
}

}

