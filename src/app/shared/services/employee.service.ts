import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  endpoint: string = 'https://localhost:7077/api/Employee/GetUsers';
  endpoint1: string = 'https://localhost:7077/api/Employee/';
  endpoint2: string = 'https://localhost:7077/api/Employee/';
  endpoint3: string = 'https://localhost:7077/api/Employee/';

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    let options = {};

    return this.http.get(this.endpoint, options);
  }
  getUserById(EmployeeId: number){
    return this.http.get(`${this.endpoint1}${EmployeeId}`);
  }

  deleteUsers(EmployeeId: number) {
    return this.http.delete(`${this.endpoint3}${EmployeeId}`);
  }

  addUser(model: any){
    return this.http.post(`${this.endpoint3}`, model);
  }
}
