export function isEmptyObj(obj: any) {
  for (let key in obj) {
    if (
      obj.hasOwnProperty(key) &&
      (obj[key] === null || obj[key] === undefined || obj[key] === "")
    ) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
