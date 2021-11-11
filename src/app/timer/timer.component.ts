import { Component, Input, OnInit } from '@angular/core';
import { ETimerState, Timer } from '../interfaces';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  timerTemplate: Timer = {
    created: undefined,
    state: ETimerState.NotStarted,
    timeSpentRunning: 0,
  };
  // spread operator to make sure the template is not adjusted
  newTimer: Timer = { ...this.timerTemplate };
  oldTimers: Array<Timer> = [];
  timers: Array<Timer> = [...this.oldTimers, this.newTimer];
  currentInterval: any;
  sortDirection: 'asc' | 'desc' = 'asc';

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy() {
    clearInterval(this.currentInterval);
  }

  startStop(timer: Timer) {
    if (timer.state === ETimerState.NotStarted) {
      this.startTimer();
    } else if (timer.state === ETimerState.Started) {
      this.stopTimer();
    }
  }

  startTimer = () => {
    this.newTimer.created = new Date();
    this.newTimer.state = ETimerState.Started;
    this.currentInterval = setInterval(() => {
      this.updateTimer();
    }, 1000);
  };

  stopTimer = () => {
    clearInterval(this.currentInterval);
    this.oldTimers.push({
      ...this.newTimer,
      state: ETimerState.Done,
    });
    // spread operator to make sure the template is not adjusted
    this.newTimer = { ...this.timerTemplate };
    console.log(this.newTimer);
  };

  updateTimer = () => {
    this.newTimer.timeSpentRunning++;
  };

  resetTimers = () => {
    this.oldTimers = [];
  };

  toggleSorting = () => {
    if (this.sortDirection === 'asc') {
      this.sortDirection = 'desc';
      this.oldTimers.sort((a, b) => {
        if (a.created && b.created) {
          return b.created.getTime() - a.created.getTime();
        }

        return 0;
      });
    } else {
      this.sortDirection = 'asc';
      this.oldTimers.sort((a, b) => {
        if (a.created && b.created) {
          return a.created.getTime() - b.created.getTime();
        }

        return 0;
      });
    }
  };

  getAllTimers = () => {
    return [...this.oldTimers, this.newTimer];
  };
}
