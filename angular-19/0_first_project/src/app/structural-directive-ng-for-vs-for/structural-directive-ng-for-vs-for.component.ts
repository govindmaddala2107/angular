import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive-ng-for-vs-for',
  imports: [CommonModule],
  templateUrl: './structural-directive-ng-for-vs-for.component.html',
  styleUrl: './structural-directive-ng-for-vs-for.component.css'
})
export class StructuralDirectiveNgForVsForComponent {

  employeeDetails: any[] = [
    {
      "id": 101,
      "name": "Aarav Sharma",
      "email": "aarav.sharma@example.com",
      "department": "Engineering"
    },
    {
      "id": 102,
      "name": "Priya Nair",
      "email": "priya.nair@example.com",
      "department": "Product Management"
    },
    {
      "id": 103,
      "name": "Rohan Verma",
      "email": "rohan.verma@example.com",
      "department": "Design"
    },
    {
      "id": 104,
      "name": "Ananya Iyer",
      "email": "ananya.iyer@example.com",
      "department": "Marketing"
    },
    {
      "id": 105,
      "name": "Vikram Mehta",
      "email": "vikram.mehta@example.com",
      "department": "Human Resources"
    }
  ]

  names: any[] = [];


}
