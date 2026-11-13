import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive-ng-switch-vs-switch',
  imports: [CommonModule],
  templateUrl: './structural-directive-ng-switch-vs-switch.component.html',
  styleUrl: './structural-directive-ng-switch-vs-switch.component.css'
})
export class StructuralDirectiveNgSwitchVsSwitchComponent {

  ngSwitchGrade: number = 0;
  switchGrade: number = 0;

  ngSwitchGradeSet(grade: number) {
    this.ngSwitchGrade = grade;
  }

  switchGradeSet(grade: number) {
    this.switchGrade = grade;
  }

}
