export default function getResponseFromAPI() {
  const promise = new Promise((resolve, reject) => {
    const example1 = true;
    if (example1) {
      resolve('First Promise');
    } else {
      reject(new Error("Couldn't keep a simple promise"));
    }
  });
  return promise;
}
