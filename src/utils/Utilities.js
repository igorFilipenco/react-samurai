/**
 * Method generates random string which can be used as react-element key
 * @returns key{string}
 */
export const makeRandomKey = () => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  for (let i = 0; i < 100; i++) {
    result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
  }

  return result;
};