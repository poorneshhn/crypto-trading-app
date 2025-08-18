import { useCallback, useState } from 'react';

import { type IHookReturn, type IState } from './types';
import { processError, Status } from './utils';

export const usePromiseStatus = (): IHookReturn => {
  const [state, setState] = useState<IState>({ status: Status.IDLE });

  const { status, error } = state;

  const track = useCallback<IHookReturn['track']>(async (promise) => {
    setState({ status: Status.PENDING, error: null });

    try {
      const response = await promise;
      setState({ status: Status.SUCCESS });

      return response;
    } catch (error) {
      setState({
        status: Status.FAILED,
        error: processError(error as Error | string),
      });

      throw error;
    }
  }, []);

  const reset = (): void => {
    setState({ status: Status.IDLE, error: null });
  };

  return {
    track,
    error,
    status,
    isPending: status === Status.PENDING,
    reset,
  };
};
