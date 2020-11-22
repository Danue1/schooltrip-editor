export const timeout = (timeout: number): Promise<void> => new Promise(resolve => window.setTimeout(resolve, timeout));
