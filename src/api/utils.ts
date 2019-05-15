interface Obj {
  [key: string]: any;
}

export const arrayFromObject = (obj: Obj) => Object.keys(obj).map(key => obj[key]);
