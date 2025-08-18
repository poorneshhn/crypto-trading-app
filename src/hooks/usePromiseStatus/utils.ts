export const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  SUCCESS: 'success',
  FAILED: 'failed',
}

export const processError = (error: Error | string): string => {
  return error instanceof Error ? error.message : error;
};
