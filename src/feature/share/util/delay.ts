export const delayFn = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
