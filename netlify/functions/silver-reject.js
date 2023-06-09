export const handler = async () => {
  const data = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        error: "something's gone wrong with silver!",
      });
    }, 2000);
  });

  return {
    statusCode: 500,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(data),
  };
};
