import { Component, Input, OnInit, Output } from '@angular/core';
import { EmployeeService } from '../shared/services/employee.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adit-employee',
  templateUrl: './adit-employee.component.html',
  styleUrls: ['./adit-employee.component.css']
})

export class AditEmployeeComponent implements OnInit {
  id: any = 0;

  model: any = {
    employeeId: 0,
    employeeName: '',
    department: '',
    dateOfJoining: ''
  }

  constructor(
    private employee: EmployeeService,
    private _Activatedroute: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this._Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    console.log(this.id);
    this.getUserDetailsById(this.id);
  }

  getUserDetailsById(empId: number){
    this.employee.getUserById(empId).subscribe(res => {
      console.log(res);
      this.model = res;
      this.model.dateOfJoining = this.model.dateOfJoining.split('T')[0];
      console.log(this.model);
    });
  }

  onSubmit(form: NgForm) {
    console.log(this.model);
    this.employee.addUser(this.model).subscribe(res => {
      console.log('response model: ', this.model);
    });
    alert("Success!");
    this.router.navigate(['employee-list']);
  }

}
