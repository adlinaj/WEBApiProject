import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewComponent } from './view/view.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './student.service';
import { ClubregisterComponent } from './clubregister/clubregister.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { EditstudentComponent } from './editstudent/editstudent.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FaqComponent,
    LoginComponent,
    RegisterComponent,
    ViewComponent,
    ClubregisterComponent,
    AddstudentComponent,
    EditstudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
