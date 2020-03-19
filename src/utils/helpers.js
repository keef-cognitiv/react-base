import { v1 as uuid } from 'uuid';

export function normalizeWithUUID(array) {
  return array.map(arr => ({
    ...arr,
    uuid: uuid(),
  }));
}

export function formatNull(value, append = '') {
  if (value === null || value === undefined) {
    return append;
  }
  return value;
}

export function containsStrings(string1 = '', string2 = '') {
  return string1
    .toString()
    .toLowerCase()
    .includes(string2.toString().toLowerCase());
}

export function compareJSON(array1 = [], array2 = []) {
  return JSON.stringify(array1) === JSON.stringify(array2);
}
