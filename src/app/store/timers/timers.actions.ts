import { createAction, props } from '@ngrx/store';
import { Timer } from '../../interfaces';

export const getTimers = createAction(
  '[Timers] Get Timers',
  props<{ timers: Array<Timer> }>()
);

export const addTimer = createAction(
  '[Timers]: Add Timer',
  props<{ timer: Timer }>()
);

export const resetTimers = createAction('[Timers]: Reset Timers');
