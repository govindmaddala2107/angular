import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  username: string = "govindmaddala";
  job: string = "Consultant";
  propertyBindingValue: string = "This is property binding";
  interPolationValue: string = "This is Interpolation binding";
  content: string = ""

  clickMe(): void {
    alert("Button is clicked")
  }

}
