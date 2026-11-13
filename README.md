# Angular 19:
## Angular Setup:
- Node Installation
- Typescript Installation. ```npm i -g typescript```
- Angular 19 installation. ```npm i -g @angular/cli@19```
- New Project creation. ```ng new <project_name>```

### Creation and Injection of Component
- #### Creation
    - Creation of component: ```ng g c user```
        ```text
        CREATE src/app/user/user.component.html (20 bytes)
        CREATE src/app/user/user.component.spec.ts (601 bytes)
        CREATE src/app/user/user.component.ts (217 bytes)
        CREATE src/app/user/user.component.css (0 bytes)
        ```
        - it will create user folder in app folder.
- #### Injection
    - Injecting Component
        - Add **UserComponent** in imports in app.component.ts
            ```typescript
            @Component({
                selector: 'app-root',
                imports: [RouterOutlet, UserComponent],
                templateUrl: './app.component.html',
                styleUrl: './app.component.css'
            })
            export class AppComponent {
                title = '0_first_project';
            }
            ```
        - add <app-user></app-user> template in app.component.html
            ```html
            <app-user></app-user>
            <router-outlet />
            ```
### Data Binding:
- #### One-way Data Binding:
    - #### Component(TS file)  to View (Template)
        - ##### Interpolation: {{}}
            - Create variables in ts file and user in html using {{}}:

                ```typescript
                @Component({
                    selector: 'app-data-binding',
                    imports: [],
                    templateUrl: './data-binding.component.html',
                    styleUrl: './data-binding.component.css'
                })
                export class DataBindingComponent {

                    username: string = "govindmaddala";
                    job: string = "Consultant";
                    interPolationValue: string = "This is Interpolation binding";

                }
                ```
            - Use in html with **{{}}** like 

                ```html
                <div>
                    <div>User Details</div>
                    <hr>
                    <h4>User: {{username}}</h4>
                    <p>Job: {{job}}</p>
                    <input type="text" name="propertyBindingValue" value="{{interPolationValue}}">
                </div>
                ```
            - See for value, we are passing value in {{}}
            - Output is like 
                ![Interpolation](images/Interpolation.png)

        - ##### Property Binding: [] 
            - This is only for assigning value to property or attribute but such property or attribute has to be wrapped in [].
            - example 
                - create 
                    ```
                    propertyBindingValue: string = "This is property binding";
                    ```
                - use in html like:
                    ```
                    <input type="text" name="propertyBindingValue" [value]="propertyBindingValue">
                    ```
            
            - Create variables in ts file and use in html using them directly by wrapping that varibale:
                ```typescript
                @Component({
                    selector: 'app-data-binding',
                    imports: [],
                    templateUrl: './data-binding.component.html',
                    styleUrl: './data-binding.component.css'
                })
                export class DataBindingComponent {
                    propertyBindingValue: string = "This is property binding";
                }
                ```
            - Use in html with **[]** like 
                ```html
                <h3>Property Binding</h3>
                <input
                    type="text"
                    name="propertyBindingValue"
                    [value]="propertyBindingValue"
                />
                ```
            - Output is like :
                ![PropertyBinding](images/PropertyBinding.png)


    - #### View(Template) to Component (TS file):
        - ##### Event Binding: ()
            - It includes events happened on html and on event we can call any function.
            - In general, in HTML, for event, syntax is like ```<button click="clickMe()">Click Me</button>``` but in angular using event binding, click="clickMe()" changes to (click)="clickMe()"
            - Compoment Setup:
                ```typescript
                @Component({
                    selector: 'app-data-binding',
                    imports: [FormsModule],
                    templateUrl: './data-binding.component.html',
                    styleUrl: './data-binding.component.css'
                })
                export class DataBindingComponent {
                    clickMe(): void {
                        alert("Button is clicked")
                    }
                }
                ```
            - HTML setup is
                ```html
                <h3>Event Binding</h3>
                <button (click)="clickMe()">Click Me</button>
                ```
            - Output is
                ![EventBinding](images/EventBinding.png)

- #### Two-way Data Binding: [()]
    - Here Data will be flowed from Component to View and View to Component.
    - For this, we need to import **FormsModule** into imports object in corresponding component.
    - Then using **[(ngModel)]** we can use it.
    - Code setup is:
        - Component:
            ```typescript
            @Component({
                selector: 'app-data-binding',
                standalone: true,
                imports: [FormsModule],
                templateUrl: './data-binding.component.html',
                styleUrl: './data-binding.component.css'
            })
            export class DataBindingComponent {
                content: string = ""
            }
            ```
        - View:
            ```html
            <h2>Two Way Data Binding</h2>
            <h3>Using NgModel</h3>
            <input type="text" name="user-content" [(ngModel)]="content" />
            <br /><br />
            <div>
                <div>User Content:</div>
                <div>{{ content }}</div>
            </div>
            ```
        - Output:
            ![TwoWayDataBinding](images/NgModel2WayDataBinding.png)

### Directives:
- Angular directives are type of technology that can manipulate DOM object.
- In general directives are components without view but angular components are directives with view. 
- #### Component Directive:
    - Angular directive with a template view.
    - Used with a template. This is more common directive type.
    - Normal components are component directives.
- #### Structural Directive:
    - They can change DOM layouts by manipulating DOM i.e apperance or behaviour of elements, component or another directive.
    - They are:
        - ```*ngIf```: conditionally show or hide elements based on boolean condition.
        - ```*ngFor```: iterate through list and generate new elements in DOM.
        - ```*ngSwitch```: adds or removes DOM elements based on the values of a switch expression.
    - From Angular 17+, as an alternative there are **new built-in control flow statements**.
- #### Attribute Directive:
    - They can change the appearance or behaviour of an element, component or another directive by modifying attributes.
    - They are:
        - ```[ngClass]```: adds or removes a set of CSS classes.
        - ```[ngStyle]```: adds or remove a set of HTML inline styles.
        - ```[ngModel]```: adds two-day data binding to an HTML form element.
- #### Custom Directive:
    - which can create our custom directives from scratch.

- #### *ngIf vs @if():
    - Angular provides conditional rendering using:

    - `*ngIf` (Traditional Structural Directive)
    - `@if` (New Control Flow Syntax introduced in Angular 17+)
    - Both are used to conditionally add or remove elements from the DOM based on a boolean expression.
    - For `*ngIf` required import is 
        ```typescript
        import { CommonModule, NgIf } from '@angular/common';
        ```
        and keep either CommonModule or NgIf in imports array but for **@if()** no need of any imports.
    - Component is same for both `*ngIf` and `@if` and is:
        ```typescript
        import { CommonModule, NgIf } from '@angular/common';
        @Component({
            selector: 'app-structural-directive-ngif-vs-if',
            imports: [NgIf],
            templateUrl: './structural-directive-ngif-vs-if.component.html',
            styleUrl: './structural-directive-ngif-vs-if.component.css'
        })
        export class StructuralDirectiveNgifVsIfComponent {
            input1: string = "";
            input2: string = "";
            isChecked: boolean = false;

            onCheck() {
                this.isChecked = !this.isChecked;
            }
        }
        ```
    - HTML Syntax of `*ngIf`:
        ```html
        <!-- Using direct boolean -->
        <div class="col-4">
            <div>
                <input type="checkbox" id="terms" (change)="onCheck()" />
                <label for="terms">Terms & Conditions</label>
            </div>
            <div *ngIf="isChecked">
                <button class="btn btn-success">Submit</button>
            </div>
        </div>

        <!-- Using normal true false condtions like string equal and all -->
        <div class="col-4">
            <input type="text" [(ngModel)]="input1" />
            <input type="text" [(ngModel)]="input2" />

            <!-- When Both are empty -->
            <span *ngIf="!input1 && !input2">Inputs are empty.</span>

            <!-- When any one is not empty and check if both are equal -->
            <span *ngIf="(input1 || input2) && input1 === input2"
                >Both are same.</span
            >
            <!-- When any one is not empty and check if both are not equal -->
            <span *ngIf="(input1 || input2) && input1 !== input2"
                >Both are not same.</span
            >
        </div>
        ```
    - HTML Syntax for `@if()`:
        ```html
        <!-- Using direct boolean -->
        <div class="col-4">
            <div>
                <input type="checkbox" id="terms" (change)="onCheck()" />
                <label for="terms">Terms & Conditions</label>
            </div>
            @if (isChecked) {
                <button class="btn btn-success">Submit</button>
            }
        </div>

        <!-- Using normal true false condtions like string equal and all -->
        <div class="col-4">
            <input type="text" [(ngModel)]="input1" />
            <input type="text" [(ngModel)]="input2" />

            <!-- When Both are empty -->
            @if (!input1 && !input2) {
                <span>Inputs are empty.</span>
            } 
            <!-- When any one is not empty and check if both are equal -->
            @else if ((input1 || input2) && input1 === input2) {
                <span>Both are same.</span>
            } 
            <!-- When any one is not empty and check if both are not equal i.e as else condition -->
            @else {
                <span>Both are not same.</span>
            }
        </div>
        ```



- #### *ngFor vs @for():
    - Angular provides conditional rendering using:
    - `*ngFor` (Traditional Structural Directive)
    - `@for` (New Control Flow Syntax introduced in Angular 17+)
    - Both are used to render array of elements.
    - For `*ngFor` required import is 
        ```typescript
        import { CommonModule, NgFor } from '@angular/common';
        ```
        and keep either CommonModule or NgFor in imports array but for **@for()** no need of any imports.
    - Also in @for(), track is mandatory which could help in change particular element only when some state is changed. It helps in enhancing performance where this track is optional in  `*ngFor`.
    - Component is same for both `*ngFor` and `@for` and is:
        ```typescript
        import { CommonModule, NgFor } from '@angular/common';
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
                }
            ];
            names: any[] = [];
        }
        ```
    - HTML Syntax of `*ngFor`:
        ```html
        <div>
            <select name="employees" id="employees">
                <option 
                    [value]="emp.email" 
                    *ngFor="let emp of employeeDetails"
                >
                    {{ emp.name }}
                </option>
            </select>
        </div>

        <div>
            <table>
                <tbody id="employee-table-body">
                    <tr *ngFor="let emp of employeeDetails">
                        <td>{{ emp.id }}</td>
                        <td>{{ emp.name }}</td>
                        <td>{{ emp.email }}</td>
                        <td>{{ emp.department }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        ```
    - HTML Syntax for `@if()`:
        ```html
        <!-- Using direct boolean -->
        <div class="col-4">
            <div>
                <input type="checkbox" id="terms" (change)="onCheck()" />
                <label for="terms">Terms & Conditions</label>
            </div>
            @if (isChecked) {
                <button class="btn btn-success">Submit</button>
            }
        </div>

        <!-- Using normal true false condtions like string equal and all -->
        <div class="col-4">
            <input type="text" [(ngModel)]="input1" />
            <input type="text" [(ngModel)]="input2" />

            <!-- When Both are empty -->
            @if (!input1 && !input2) {
                <span>Inputs are empty.</span>
            } 
            <!-- When any one is not empty and check if both are equal -->
            @else if ((input1 || input2) && input1 === input2) {
                <span>Both are same.</span>
            } 
            <!-- When any one is not empty and check if both are not equal i.e as else condition -->
            @else {
                <span>Both are not same.</span>
            }
        </div>
        ```


- #### *ngSwitch vs @switch():
    - Angular provides conditional rendering using:

    - `*ngIf` (Traditional Structural Directive)
    - `@if` (New Control Flow Syntax introduced in Angular 17+)
    - Both are used to conditionally add or remove elements from the DOM based on a boolean expression.
    - For `*ngIf` required import is 
        ```typescript
        import { CommonModule, NgIf } from '@angular/common';
        ```
        and keep either CommonModule or NgIf in imports array but for **@if()** no need of any imports.
    - Component is same for both `*ngIf` and `@if` and is:
        ```typescript
        import { CommonModule, NgIf } from '@angular/common';
        @Component({
            selector: 'app-structural-directive-ngif-vs-if',
            imports: [NgIf],
            templateUrl: './structural-directive-ngif-vs-if.component.html',
            styleUrl: './structural-directive-ngif-vs-if.component.css'
        })
        export class StructuralDirectiveNgifVsIfComponent {
            input1: string = "";
            input2: string = "";
            isChecked: boolean = false;

            onCheck() {
                this.isChecked = !this.isChecked;
            }
        }
        ```
    - HTML Syntax of `*ngIf`:
        ```html
        <!-- Using direct boolean -->
        <div class="col-4">
            <div>
                <input type="checkbox" id="terms" (change)="onCheck()" />
                <label for="terms">Terms & Conditions</label>
            </div>
            <div *ngIf="isChecked">
                <button class="btn btn-success">Submit</button>
            </div>
        </div>

        <!-- Using normal true false condtions like string equal and all -->
        <div class="col-4">
            <input type="text" [(ngModel)]="input1" />
            <input type="text" [(ngModel)]="input2" />

            <!-- When Both are empty -->
            <span *ngIf="!input1 && !input2">Inputs are empty.</span>

            <!-- When any one is not empty and check if both are equal -->
            <span *ngIf="(input1 || input2) && input1 === input2"
                >Both are same.</span
            >
            <!-- When any one is not empty and check if both are not equal -->
            <span *ngIf="(input1 || input2) && input1 !== input2"
                >Both are not same.</span
            >
        </div>
        ```
    - HTML Syntax for `@if()`:
        ```html
        <!-- Using direct boolean -->
        <div class="col-4">
            <div>
                <input type="checkbox" id="terms" (change)="onCheck()" />
                <label for="terms">Terms & Conditions</label>
            </div>
            @if (isChecked) {
                <button class="btn btn-success">Submit</button>
            }
        </div>

        <!-- Using normal true false condtions like string equal and all -->
        <div class="col-4">
            <input type="text" [(ngModel)]="input1" />
            <input type="text" [(ngModel)]="input2" />

            <!-- When Both are empty -->
            @if (!input1 && !input2) {
                <span>Inputs are empty.</span>
            } 
            <!-- When any one is not empty and check if both are equal -->
            @else if ((input1 || input2) && input1 === input2) {
                <span>Both are same.</span>
            } 
            <!-- When any one is not empty and check if both are not equal i.e as else condition -->
            @else {
                <span>Both are not same.</span>
            }
        </div>
        ```


### MISC:
- #### Installation & Setup of Bootstrap:
    - Package Installation:
      ```npm i bootstrap```
    - Configuration Setup: In angular.json
        - add ```"node_modules/bootstrap/dist/css/bootstrap.min.css"``` in styles,
        - add ```"node_modules/bootstrap/dist/js/bootstrap.min.js"``` in scripts like below:
        ```json
        "styles": [
              "src/styles.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
            "scripts": ["node_modules/bootstrap/dist/js/bootstrap.min.js"],
        ```
    - Stop and restart the server.
      





















###### 
- To run in production mode:
    - ```ng build --configuration production```
    - ```ng serve --configuration production```



