export const timeoutPromise = () =>
  new Promise((resolve, _) =>
    setTimeout(() => resolve('promise 1 resolved'), 2000)
  );
