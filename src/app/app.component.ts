import { Component, OnInit } from '@angular/core';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  tasks = [];
  constructor(private taskService: TasksService){
  }
  ngOnInit(){
    this.tasks = this.taskService.tasklist
    console.log(this.tasks)
  }
}
