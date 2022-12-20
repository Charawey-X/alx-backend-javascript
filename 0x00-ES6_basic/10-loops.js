export default function appendToEachArrayValue(array, appendString) {
  const array1 = array.slice();
  for (const idx of array) {
    array1[array.indexOf(idx)] = appendString + idx;
  }

  return array1;
}
