const request = require("request");

const geocode = (address, cb) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1Ijoibm5hZ2FyaXkiLCJhIjoiY2s4emlvandlMWluaDNwbzdoc25iMzdsZiJ9.bX1CYdLzpRngMGTLzXnDmw`;

  request({ url, json: true }, (error, { body }) => {
    // debugger;
    // to run with debugger use inspect : node inspect .\app.js read --title="" or
    // node --inspect-brk .\app.js read --title="My note 55"
    if (error) {
      cb("Unable to connect to location services!", undefined);
    } else if (body.features.length === 0) {
      cb("Unable to find location. Try another search.", undefined);
    } else {
      const { features } = body;
      cb(undefined, {
        address: address,
        location: features[0].place_name,
      });
    }
  });
};
module.exports = geocode;
