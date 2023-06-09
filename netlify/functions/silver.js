export const handler = async () => {
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        silver: 23,
      });
    }, 2000);
  });

  return {
    statusCode: 200,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
    body: JSON.stringify(data),
  };
};
