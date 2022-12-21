import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((values) => {
      // console.log(values);
      const result = [];
      values.forEach((object) => {
        if (object.status === 'fulfilled') {
          result.push({ status: object.status, value: object.value });
        } else {
          result.push({ status: object.status, value: `${object.reason}` });
        }
      });
      // console.log(result);
      return result;
    });
}
