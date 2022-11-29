import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewComponent } from './view/view.component';
import { ClubregisterComponent } from './clubregister/clubregister.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { EditstudentComponent } from './editstudent/editstudent.component';


const routes: Routes = [
  {path: 'home',component:HomeComponent}, //home
  {path: 'about',component:AboutComponent}, 
  {path: 'faq',component:FaqComponent}, 
  {path: 'login',component:LoginComponent}, 
  {path: 'register',component:RegisterComponent}, 
  {path: 'view',component:ViewComponent}, 
  {path: 'clubregister',component:ClubregisterComponent},
  {path: 'addstudent',component:AddstudentComponent}, //edit
  {path: 'editstudent',component:EditstudentComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}