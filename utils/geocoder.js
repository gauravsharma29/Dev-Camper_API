const NodeGeoCoder = require("node-geocoder");

// Below all code is provided in this git page of this module
const options = {
  provider: process.env.GEOCODER_PROVIDER,
  httpAdapter: "https",
  apiKey: process.env.GEOCODER_API_KEY,
  formatter: null
};

const geoCoder = NodeGeoCoder(options);

module.exports = geoCoder;
