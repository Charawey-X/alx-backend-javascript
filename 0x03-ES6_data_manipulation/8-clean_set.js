export default function cleanSet(set, startString) {
  return typeof startString === 'string' && startString.length !== 0 ? [...set].filter((string) => string && string.startsWith(startString)).map((string) => string.replace(startString, '')).join('-') : '';
}
