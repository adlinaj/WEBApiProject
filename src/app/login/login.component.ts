import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // angForm: FormGroup;
  // constructor(private fb: FormBuilder, private dataService: ApiService, private router:Router) 
  // {
  //   this.angForm = this.fb.group
  //   ({
  //     username: ['', [Validators.required,Validators.minLength(1)]],
  //     password: ['', Validators.required]
  //   });
  // }

  constructor() { }

  ngOnInit(): void {
  }
  // postdata(angForm1: { value: { username: any; password: any; }; })
  // {
  //   this.dataService.userlogin(angForm1.value.username,angForm1.value.password)
  //   .pipe(first())
  //   .subscribe(
  //     data =>
  //     {
  //       const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/home';
  //       this.router.navigate([redirect]);
  //     },

  //     error => 
  //     {
  //       alert("Username or password is incorrect")
  //     });
  // }
  // get username() { return this.angForm.get('username'); }
  // get password() { return this.angForm.get('password'); }
}

