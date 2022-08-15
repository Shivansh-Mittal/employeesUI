import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  employee = 'https://localhost:7077/api/Employee/';

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
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
