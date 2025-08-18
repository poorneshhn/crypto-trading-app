import type { ObjectValues } from '../../types/types';
import { Status } from './utils';

export interface IState {
  status: ObjectValues<typeof Status>;
  error?: string | null;
}

export interface IHookReturn extends IState {
  track: TrackFn;
  isPending: boolean;
  reset: () => void;
}

export type TrackFn = <T = unknown>(promise: Promise<T>) => Promise<T>;
