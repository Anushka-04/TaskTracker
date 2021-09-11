import { Component, OnInit } from '@angular/core';
import { Task } from '../../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks : Task[]
  localItem : string 

  constructor() {

     this.localItem = localStorage.getItem("tasks") as string;
      if (this.localItem == null){
        this.tasks = [];
      }
      else{
        this.tasks = JSON.parse(this.localItem);
      }
    }

  ngOnInit(): void {
  }

  taskDelete(task:Task){
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
    localStorage.setItem("tasks",JSON.stringify(this.tasks));
  }

  addTask(task:Task){
    console.log(task);
    this.tasks.push(task);
   localStorage.setItem("tasks",JSON.stringify(this.tasks));
  }

  onToggleTask(task:Task){
    task.reminder = !task.reminder;
    localStorage.setItem("tasks",JSON.stringify(this.tasks));
  }

}
