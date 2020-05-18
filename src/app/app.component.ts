import { Component } from '@angular/core';

export interface Post {
  title: string
  text: string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  search = ''
  searchField = 'title'

  posts: Post[] = [
    {title: 'My title', text:'My text always try'},
    {title: 'My work', text:'My work is drink bear'},
    {title: 'My games', text:'I love play football'},
  ]

  addPosts() {
      this.posts.unshift({
        title: 'New title after unshift obj',
        text: 'Text after unshift obj in tetx line '
      })
  }
}
