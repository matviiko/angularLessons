import { Component } from '@angular/core';

export interface Post {
  title: string,
  text: string,
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts: Post[] = [
    {title: 'I want learn Angular', text: 'I learning Angular', id: 1 },
    {title: 'I want learn Angulascsccsascar', text: 'I learning Angacascsasular', id: 2 }
  ]

  upDatePosts (post: Post) {
    this.posts.unshift(post)
  }

}
