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
                    imports: [FormsModule],
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
            - Output is like 
                ![Interpolation](images/Interpolation.png)

        - ##### Property Binding: [] 
            - This is only for assigning value to property or attribute but such property or attribute has to be wrapped in [].
            - example 
                - create 
                    ```propertyBindingValue: string = "This is property binding";```
                - use in html like 
                    ```<input type="text" name="propertyBindingValue" [value]="propertyBindingValue">```
            
            Create variables in ts file and user in html using them directly by wrapping that varibale:

                ```typescript
                @Component({
                    selector: 'app-data-binding',
                    imports: [FormsModule],
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
            - Output is like 
                ![Interpolation](images/Interpolation.png)



