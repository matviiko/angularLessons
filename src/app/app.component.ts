import {Component, OnInit} from '@angular/core'
import {HttpClient} from "@angular/common/http";
import {delay, filter} from "rxjs/operators";

export interface Todo {
  completed: boolean
  id?: number
  title: string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    todos: Todo[] = []

    loading = false

    todoTitle = ""

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
            .subscribe(todos => {
                this.todos = todos
            })
    }

    addTodo() {
        if (!this.todoTitle.trim()) {
            return
        }
        const newTodo: Todo = {
        title: this.todoTitle,
        completed: false
        }


        this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', newTodo)
            .subscribe(todo => {
                this.todos.push(todo)
                this.todoTitle = ''
            })
    }

    fetchTodos() {
        this.loading = true
        this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
            .pipe(delay(1500))
            .subscribe(todos => {
                console.log(todos)
                this.todos = todos
                this.loading = false
            })
    }


    removeTodo(id: number) {
        this.http.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .subscribe(resp => {
                this.todos = this.todos.filter(t => t.id !== id)
            })
    }
}
