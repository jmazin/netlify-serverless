export const handler = async () => {
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        gold: 2034,
        silver: 23,
        platinum: 1008,
      });
    }, 5000);
  });

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
