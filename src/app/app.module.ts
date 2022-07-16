import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DialogModule } from 'primeng/dialog';
import {MenubarModule} from 'primeng/menubar';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { AditEmployeeComponent } from './adit-employee/adit-employee.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MsgService } from './shared/services/msg.service';
import { ErmFormsComponent } from './erm-forms/erm-forms.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    EmployeesListComponent,
    AditEmployeeComponent,
    HomeComponent,
    PageNotFoundComponent,
    ErmFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DialogModule,
    MenubarModule,
    FormsModule
  ],
  providers: [MsgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
