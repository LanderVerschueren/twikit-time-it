import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ETimerState, Timer } from '../../interfaces';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() timers: Array<Timer> = [];
  @Input() sortDirection: 'asc' | 'desc' = 'asc';
  @Output() emitTimerToStart: EventEmitter<Timer> = new EventEmitter();
  @Output() emitSort: EventEmitter<void> = new EventEmitter();
  @Output() emitReset: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  shouldShowControls = (timers: Array<Timer>) => {
    /* More than 2 at the moment because by default a newTimer is added in the array
     * Meaning 3 items should contain two stopped timers and one empty timer.
     **/

    if (timers.length > 2) {
      return true;
    }
    return false;
  };
}
