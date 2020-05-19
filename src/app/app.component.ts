import {Component, OnInit} from '@angular/core'
import {HttpClient} from "@angular/common/http";
import {delay, filter} from "rxjs/operators";
import {Todo, TodosService} from "./services/todos.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    todos: Todo[] = []

    loading = false

    todoTitle = ""

    constructor(private todosService: TodosService) {
    }

    ngOnInit() {
        this.fetchTodos()
    }

    addTodo() {
        if (!this.todoTitle.trim()) {
            return
        }

        this.todosService.addTodo({
            title: this.todoTitle,
            completed: false
        }).subscribe(todo => {
            this.todos.push(todo)
            this.todoTitle = ''
        })
    }

    fetchTodos() {
        this.loading = true

        this.todosService.fetchTodos()
            .subscribe(todos => {
                console.log(todos)
                this.todos = todos
                this.loading = false
            })
    }


    removeTodo(id: number) {
        this.todosService.removeTodos(id)
            .subscribe(resp => {
                this.todos = this.todos.filter(t => t.id !== id)
            })
    }
}
