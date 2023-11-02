export const sortCopy = (array: any[], cb: (a: any, b: any) => number) =>
  array
    .slice(0)
    .sort(cb);
