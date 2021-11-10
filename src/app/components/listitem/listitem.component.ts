import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ETimerState, Timer } from '../../interfaces';

@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.scss'],
})
export class ListitemComponent implements OnInit {
  @Input() timer: Timer | undefined = undefined;
  @Output() startStopEvent = new EventEmitter<Timer>();

  constructor() {}

  ngOnInit(): void {}

  startStopTimer = (timer: Timer) => {
    this.startStopEvent.emit(timer);
  };
}
