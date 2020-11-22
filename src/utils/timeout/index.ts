export const timeout = (timeout: number) => new Promise(resolve => window.setTimeout(resolve, timeout));
