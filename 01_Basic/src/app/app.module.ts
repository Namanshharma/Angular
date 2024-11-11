import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './shared/card/card.component';
import { TasksComponent } from './tasks/tasks.component';
import { AddNewTaskComponent } from './tasks/add-new-task/add-new-task.component';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from './tasks/task/task.component';
import { DatePipe } from '@angular/common';

@NgModule({
  // here is in the declaraitons we can put all of those COMPONENTS which we need to work under this module. 
  declarations: [AppComponent, HeaderComponent, UserComponent, CardComponent, TasksComponent, AddNewTaskComponent, TaskComponent],
  // Similarly, whatever the component we need to use in the module we need to import that component in IMPORTS array but the only difference between those 2 :- that the DECLARATIONS array 
  // will not work with the Standalone components where as IMPORTS array will work with Standalone components and non standalone components. 
  // As IMPORT array is not only used to Import the Standalone componnents but also used to import the different Modules
  imports: [
    BrowserModule, FormsModule, DatePipe
  ],
  // this BOOTSTRAP array is just shows that this Component is the starting point of the Application.
  bootstrap: [AppComponent]
})
export class AppModule { }