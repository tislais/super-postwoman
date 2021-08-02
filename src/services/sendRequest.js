
export const sendRequest = async (url, method, reqBody) => {
  if (reqBody) {
    console.log('post');
    try {
    const response = await fetch(url, {
      method: method,
      headers: {
        'Content-type': 'text/html; charset=UTF-8',
      },
      body: JSON.stringify(reqBody)
    });
    const jason = await response.text();
    console.log(jason);
    return jason;
  } catch (err) {
    console.log(err);
  }

  }
  if (method === 'GET' || 'DELETE') {
    console.log('get or delete');
    const response = await fetch(url, {
      method: method
    });
    return response.json();

  } 

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