export const sendRequest = async (url, method) => {
  return await fetch(url, {
    method: method
  }).then(res => res.json());
}