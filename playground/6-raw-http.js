const https = require("https");

const address = process.argv[2];

const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
  address
)}.json?access_token=pk.eyJ1Ijoibm5hZ2FyaXkiLCJhIjoiY2s4emlvandlMWluaDNwbzdoc25iMzdsZiJ9.bX1CYdLzpRngMGTLzXnDmw`;

// https
//   .get(url, (res) => {
//     console.log("statusCode:", res.statusCode);
//     console.log("headers:", res.headers);

//     res.on("data", (d) => {
//       process.stdout.write(d);
//     });
//   })
//   .on("error", (e) => {
//     console.error(e);
//   });

const req = https.request(url, (res) => {
  let data = "";
  res.on("data", (chunk) => {
    data = chunk.toString();
  });

  res.on("end", () => {
    console.log("Data::=> ", JSON.parse(data));
  });
});

req.on("error", (error) => {
  console.log("Error:::=> ", error);
});

req.end();
