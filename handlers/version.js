const { version } = require('../package.json');

exports.http = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ version }),
  };
};
