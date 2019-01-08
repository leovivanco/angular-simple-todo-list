import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasklist = ['Passar graxa no portão', 'Estudar Angular']
  constructor() { }
  taskAdded(newTask: string){
    this.tasklist.push(newTask);
  }
  taskDelete(index: number){
    this.tasklist.splice(index, 1)
  }
}
