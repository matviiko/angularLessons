import { Component } from '@angular/core';
import {CounterService} from "../services/counter.service";
import {LocalCounterService} from "../services/local-counter.service";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [LocalCounterService]
})
export class CounterComponent  {

  constructor(public counterService: CounterService,
              public localCounterService: LocalCounterService) {

  }



}
