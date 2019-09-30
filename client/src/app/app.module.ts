import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule }  from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';

import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { EditComponent } from './edit/edit.component';
import { TeamsComponent } from './teams/teams.component';

import { UserService } from './providers/user.service';
import { LeagueService } from './providers/leagues.service';
import { TeamService } from './providers/teams.service';
import { DetailsComponent } from './details/details.component';


const appRoutes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'edit', component: EditComponent},
  {path: 'teams', component: TeamsComponent},
  {path: 'details', component: DetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FooterComponent,
    NavComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    EditComponent,
    TeamsComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService, LeagueService, TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
