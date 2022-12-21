import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const result = [];
  Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)]).then(
    (status, value) => (result.push({ status, value })),
  ).catch((status, reason) => (result.push({ status, reason })));
  return result;
}
