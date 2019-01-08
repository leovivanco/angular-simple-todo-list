import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: any;
  @Input() index: number;
  constructor(private taskService: TasksService) { }

  ngOnInit() {
    console.log(this.task)
  }
  onDelete(index: number){
    this.taskService.taskDelete(index);
  }

}
