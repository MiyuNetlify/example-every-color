exports.handler = async () => {
  let envString = "";
  for (let key in process.env) {
  envString += `${key}: ${process.env[key]}\n`;
  }
  return {
    statusCode: 200,
    body: `hello miyu! I have a secret lanbda ${envString}`,
  };
};
