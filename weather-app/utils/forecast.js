const request = require("request");

const forecast = (address, cb) => {
  const access_key = "3e4255e21526e5d4d5e4e5b7a76df1be";
  const url = `http://api.weatherstack.com/current?access_key=${access_key}&query=${encodeURIComponent(
    address
  )}`;
  // http://api.weatherstack.com/current?access_key=3e4255e21526e5d4d5e4e5b7a76df1be&query=%20New%20York#current

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      cb("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      cb("Unable to find location", undefined);
    } else {
      const { current } = body;
      cb(
        undefined,
        "It's " +
          current.weather_descriptions +
          " day. & It is currently " +
          current.temperature +
          " degress out. There is a " +
          current.precip +
          "% chance of rain."
      );
    }
  });
};

module.exports = forecast;
