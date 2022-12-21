import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const promise = await uploadPhoto();
  const promise1 = await createUser();
  try {
    return (
      {
        photo: promise,
        user: promise1,
      }
    );
  } catch (error) {
    return (
      {
        photo: null,
        user: null,
      }
    );
  }
}
