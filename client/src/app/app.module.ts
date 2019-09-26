import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule }  from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';

import { UserService } from './providers/user.service';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
  {path: '', component: IndexComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FooterComponent,
    NavComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
