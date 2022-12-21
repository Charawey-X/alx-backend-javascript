import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const promise = await uploadPhoto();
    const promise1 = await createUser();
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
