export default function handleResponseFromAPI(promise) {
  const fullPromise = new Promise((resolve, reject) => {
    if (promise) {
      resolve({
        status: 200,
        body: 'success',
      });
    } else {
      reject(new Error());
    }
  });

  fullPromise.then(
    () => {
      console.log('Got a response from the API');
    },
    () => {
      console.log('Got a response from the API');
    },
  );
}
