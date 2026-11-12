import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive-ngif-vs-if',
  imports: [NgIf, FormsModule],
  templateUrl: './structural-directive-ngif-vs-if.component.html',
  styleUrl: './structural-directive-ngif-vs-if.component.css'
})
export class StructuralDirectiveNgifVsIfComponent {

  isChecked: boolean = false;

  inputValue: string = "gomad";
  showInputBox: boolean = true;


  input1: string = "";
  input2: string = "";

  onCheck() {
    this.isChecked = !this.isChecked;
  }

  handleShowInput(status: boolean) {
    this.showInputBox = status;
  }
}
