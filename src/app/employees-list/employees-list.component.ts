import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../shared/services/employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})

export class EmployeesListComponent implements OnInit {

  employeesList: any[] = [];
  displayUserDetails: boolean = false;

  constructor(
    private employees: EmployeeService,
    private router: Router ) { }

  ngOnInit(): void {
    this.getEmployeesList();
  }

  getEmployeesList() {
    this.employees.getUsers().subscribe(res => {
        console.log(res);
        this.employeesList = <any[]>res;
      })
  }

  displayUserDetail() {
    this.displayUserDetails = true;
  }

  editEmployee(id: any){
    this.router.navigate(['edit-employee',id]);
  }

  onDelete(number: any) {
    this.employees.deleteUsers(number).subscribe(res => {
      alert("Deleted employee "+ number);
      this.router.navigate(['employee-list']);
    })
    console.log(number + " deleted successfully.");
  }
}
