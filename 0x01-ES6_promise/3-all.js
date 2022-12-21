import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()]).then((values) => {
    console.log(values[0].body);
    console.log(values[1].firstName);
    console.log(values[1].lastName);
  });
}
