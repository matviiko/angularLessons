import { Injectable } from '@angular/core';
import {LogService} from "./log.service";

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  counter = 0

  constructor(private logService: LogService) {
  }

  increase()  {
    this.logService.log('Increase counter....')
    this.counter++
  }

  decrease()  {
    this.logService.log('Decrease counter....')
    this.counter--
  }

}
