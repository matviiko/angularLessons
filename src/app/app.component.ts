import { Component } from '@angular/core';
import {interval, Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  sub: Subscription

  constructor() {
  let steam$ = new Observable(observer => {
    setTimeout(() => {
      observer.next(1)
    }, 1500)

    setTimeout(() => {
      observer.complete()
    }, 2100)

    setTimeout(() => {
      observer.error('Something wrong')
    }, 2000)

    setTimeout(() => {
      observer.next(2)
    }, 2500)
  })

    this.sub = steam$.subscribe(
        value => {console.log('Next: ',value)},
        error => console.log('Error: ', error),
        () => console.log('Complete')
    )
  }

  stop() {
    this.sub.unsubscribe()
  }

}
