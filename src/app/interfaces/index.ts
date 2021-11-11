export enum ETimerState {
  NotStarted = 'notStarted',
  Done = 'done',
  Started = 'started',
}

export interface Timer {
  created?: Date;
  state: ETimerState;
  timeSpentRunning: number;
}
