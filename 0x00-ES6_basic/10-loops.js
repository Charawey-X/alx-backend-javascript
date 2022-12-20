export default function appendToEachArrayValue(array, appendString) {
  let array1;
  for (const idx of array) {
    array1 = array.map(() => (appendString + idx));
  }

  return array1;
}
