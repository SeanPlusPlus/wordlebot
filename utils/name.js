export const getName = (payload) => {
  const { ensName, address } = payload;

  if (!address) {
    return null;
  }

  if (ensName) {
    return ensName;
  }
 
  return address.substring(address.length - 4);
}
