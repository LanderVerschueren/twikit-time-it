import { createReducer, on } from '@ngrx/store';
import { Timer } from '../../interfaces';
import { addTimer, getTimers, resetTimers } from './timers.actions';

export const initialState: Array<Timer> = [];

export const _timersReducer = createReducer(
  initialState,
  on(addTimer, (state, { timer }) => [...state, timer]),
  on(getTimers, (state, { timers }) => timers),
  on(resetTimers, (state) => [])
);
