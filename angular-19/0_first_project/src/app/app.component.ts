import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StructuralDirectiveNgifVsIfComponent } from './structural-directive-ngif-vs-if/structural-directive-ngif-vs-if.component';
import { StructuralDirectiveNgForVsForComponent } from './structural-directive-ng-for-vs-for/structural-directive-ng-for-vs-for.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserComponent, DataBindingComponent, StructuralDirectiveNgifVsIfComponent, StructuralDirectiveNgForVsForComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '0_first_project';
}
