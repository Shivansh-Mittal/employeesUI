import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DialogModule } from 'primeng/dialog';
import {MenubarModule} from 'primeng/menubar';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { AditEmployeeComponent } from './adit-employee/adit-employee.component';
import { ErmFormsComponent } from './erm-forms/erm-forms.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MsgService } from './shared/services/msg.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    EmployeesListComponent,
    AditEmployeeComponent,
    ErmFormsComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DialogModule,
    MenubarModule,
    FormsModule
  ],
  providers: [
    MsgService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
