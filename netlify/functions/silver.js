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
    body: JSON.stringify(data),
  };
};
