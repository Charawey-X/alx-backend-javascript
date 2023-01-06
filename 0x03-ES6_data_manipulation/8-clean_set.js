export default function cleanSet(set, startString) {
  let text = '';
  text = typeof startString === 'string' && startString.length !== 0 ? [...set].filter((string) => string.startsWith(startString)).map((string) => string.replace(startString, '')).join('-') : '';
  return text;
}
