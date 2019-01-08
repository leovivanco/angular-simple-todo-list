import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @ViewChild('inputTask') inputTask : ElementRef
  constructor(private taskService: TasksService) { }

  ngOnInit() {
  }
  addTask(value: string){
    if (value !== '') {
      this.taskService.taskAdded(value);
      this.inputTask.nativeElement.value = '';
    }
  }

}
