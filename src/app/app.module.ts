import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TaskComponent } from './components/tasks-list/task/task.component';
import { TasksService } from './services/tasks.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddTaskComponent,
    TaskComponent,
    TasksListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
