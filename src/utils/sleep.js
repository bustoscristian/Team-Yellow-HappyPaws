export const sleep = (time) =>
  new Promise((resolve) => setTimeout(() => resolve(undefined), time));
