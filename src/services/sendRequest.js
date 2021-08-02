
export const sendRequest = async (url, method, reqBody) => {
  console.log(reqBody);
  if (method === 'GET' || method === 'DELETE') {
    console.log('get or delete');
    const response = await fetch(url, {
      method: method
    });
    return response.json();

  } 
  console.log('post');
  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: reqBody
  });
  return response.json();

}

// const NO_BODY = ['GET', 'DELETE'];
// export const sendRequest = (url, method, body) => {
//   return fetch(url, {
//     method,
//     headers: NO_BODY.includes(method) ? {} : { 'Content-Type': 'application/json' },
//     body: NO_BODY.includes(method) ? null : JSON.stringify(body)
//   })
//     .then(res => res.json());
// }