export const handler = async () => {
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        platinum: 1008,
      });
    }, 3000);
  });

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
