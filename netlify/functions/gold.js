export const handler = async () => {
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        gold: 2034,
      });
    }, 1000);
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
