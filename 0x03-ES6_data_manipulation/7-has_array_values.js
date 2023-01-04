export default function hasValuesFromArray(set, array) {
  return !array.map((value) => set.has(value)).includes(false);
}
