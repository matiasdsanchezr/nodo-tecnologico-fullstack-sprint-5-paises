export function isEmptyObject(obj) {
  for (const x in obj) {
    return false;
  }
  return true;
}
