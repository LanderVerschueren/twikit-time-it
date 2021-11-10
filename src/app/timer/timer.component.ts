import { Component, Input, OnInit } from '@angular/core';
import { ETimerState, Timer } from '../interfaces';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  timers: Array<Timer> = [
    {
      created: undefined,
      state: ETimerState.NoStarted,
      timeSpentRunning: 0,
      id: 1,
    },
    {
      created: new Date(),
      state: ETimerState.Done,
      timeSpentRunning: 10,
      id: 2,
    },
    {
      created: new Date(),
      state: ETimerState.Started,
      timeSpentRunning: 10,
      id: 3,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  startStop(timer: Timer) {
    console.log(timer);
    const findTimer = this.timers.find((tim) => timer.id === tim.id);
    console.log(findTimer);
  }
}
