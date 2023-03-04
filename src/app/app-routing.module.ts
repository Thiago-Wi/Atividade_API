import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './views/home/home.component';
import { RestritoComponent } from './restrito/restrito.component';
import { GuardGuard } from './guard.guard';


const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'restrito',component: RestritoComponent, canActivate: [GuardGuard]},
  {path: '', redirectTo:'/Home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
