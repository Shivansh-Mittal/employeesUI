import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employee = 'https://employees-api-inferno.vercel.app/employee/';

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    // let options = {};
    return this.http.get(this.employee);
  }
  getUserById(id: number){
    return this.http.get(`${this.employee}${id}`);
  }
  deleteUsers(id: number) {
    return this.http.delete(`${this.employee}${id}`);
  }
  addUser(model: any){
    return this.http.post(`${this.employee}`, model);
  }

}
