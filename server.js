//Install express server
const express = require('express');
const path = require('path');
const cors = require('cors');
const request = require('request');
const compression = require('compression');

const app = express();

app.use(cors());
app.use(compression());
app.use(express.static(__dirname + '/dist'));

app.get('/api/v1/stats/:platform/:username', function (req, res) {
  request(`https://public-api.tracker.gg/apex/v1/standard/profile/${req.params.platform}/${req.params.username}/`, {
    headers: {
      'TRN-Api-Key': 'c2062457-01a7-4146-8a70-59d9131d070f',
      'Accept': 'application/json'
    }
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  })
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});



// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, (res) => {

});
