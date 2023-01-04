export default function cleanSet(set, startString) {
  return typeof startString === 'string' ? [...set].filter((string) => startString.length !== 0 && string.startsWith(startString)).map((string) => string.replace(startString, '')).join('-') : '';
}
