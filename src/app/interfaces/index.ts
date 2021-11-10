export enum ETimerState {
  NoStarted = 'notStarted',
  Done = 'done',
  Started = 'started',
}

export interface Timer {
  created?: Date;
  state: ETimerState;
  timeSpentRunning: number;
  id: number
}
