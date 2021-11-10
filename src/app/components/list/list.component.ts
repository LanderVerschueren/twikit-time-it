import { Component, Input, OnInit } from '@angular/core';
import { Timer } from '../../interfaces';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() timers: Array<Timer> = [];
  constructor() {}

  ngOnInit(): void {}
}
