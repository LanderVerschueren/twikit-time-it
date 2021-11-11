import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ETimerState, Timer } from '../../interfaces';
import { addTimer, resetTimers } from '../../store/timers/timers.actions';

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
  storedTimers: Array<Timer> = [];
  // Should be type NodeJS.Timeout
  currentInterval: any;
  sortDirection: 'asc' | 'desc' = 'asc';
  timerSubscription: Subscription;

  //   add store interface to interface file.
  constructor(private store: Store<{ timers: Array<Timer> }>) {
    this.timerSubscription = store
      .pipe(select('timers'))
      .subscribe((data) => (this.storedTimers = data));
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    clearInterval(this.currentInterval);
    this.timerSubscription.unsubscribe();
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
    this.store.dispatch(
      addTimer({ timer: { ...this.newTimer, state: ETimerState.Done } })
    );
    // spread operator to make sure the template is not adjusted
    this.newTimer = { ...this.timerTemplate };
  };

  updateTimer = () => {
    this.newTimer.timeSpentRunning++;
  };

  resetTimers = () => {
    this.store.dispatch(resetTimers());
  };

  toggleSorting = () => {
    const arrayToSort = [...this.storedTimers];
    if (this.sortDirection === 'asc') {
      this.sortDirection = 'desc';
      arrayToSort.sort((a, b) => {
        if (a.created && b.created) {
          return b.created.getTime() - a.created.getTime();
        }

        return 0;
      });
    } else {
      this.sortDirection = 'asc';
      arrayToSort.sort((a, b) => {
        if (a.created && b.created) {
          return a.created.getTime() - b.created.getTime();
        }

        return 0;
      });
    }

    this.storedTimers = [...arrayToSort];
  };

  getAllTimers = () => {
    return [...this.storedTimers, this.newTimer];
  };
}
