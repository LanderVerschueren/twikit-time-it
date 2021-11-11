import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ETimerState, Timer } from '../../interfaces';

@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.scss'],
})
export class ListitemComponent implements OnInit {
  @Input() timer: Timer | undefined = undefined;
  @Output() emitTimerToStart: EventEmitter<Timer> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  startStopTimer = (timer: Timer) => {
    this.emitTimerToStart.emit(timer);
  };

  getColor = (timer: Timer) => {
    if (timer.state === ETimerState.Started) {
      return 'warn';
    }

    return 'primary';
  };

  getButtonText = (state: ETimerState) => {
    switch (state) {
      case ETimerState.NotStarted:
        return `start`;
      case ETimerState.Started:
        return ` stop`;
      case ETimerState.Done:
        return `done`;
    }
  };

  getButtonIcon = (state: ETimerState) => {
    switch (state) {
      case ETimerState.NotStarted:
        return `play_arrow`;
      case ETimerState.Started:
        return ` stop`;
      case ETimerState.Done:
        return `check`;
    }
  };
}
