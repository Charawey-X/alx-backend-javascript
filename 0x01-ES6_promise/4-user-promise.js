export default function signUpUser(firstName, lastName) {
  return Promise.resolve({ firstName, lastName }).then(
    (value) => { console.log(value); },
  ).catch(() => Error());
}
