export default function getListStudentIds(array) {
  let x;
  if (Array.isArray(array)) {
    x = array.map((val) => val.id);
  } else {
    x = [];
  }
  return x;
}
