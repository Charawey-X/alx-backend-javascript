export default function cleanSet(set, startString = '') {
  return [...set].filter((string) => startString.length !== 0 && string.startsWith(startString)).map((string) => string.replace(startString, '')).join('-') || '';
}
