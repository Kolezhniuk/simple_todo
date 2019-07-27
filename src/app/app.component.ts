import { Component, OnInit } from "@angular/core";
import { INITIAL_DATA } from "./data";
import { ToDo } from "./todo";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  todos: Array<ToDo>;
  title: string;

  ngOnInit(): void {
    this.todos = INITIAL_DATA;
  }

  get Completed() {
    return this.todos.filter(i => i.completed);
  }
  get UnCompleted() {
    return this.todos.filter(i => !i.completed);
  }

  addTask() {
    if (!this.title) return;
    
    const id = this.todos.length + 1;
    this.todos.push({
      id,
      title: this.title,
      completed: false
    });
  }
  markCompleted(todo: ToDo) {
    const task = this.todos.find(i => i.id === todo.id);
    task.completed = true;
  }
}
