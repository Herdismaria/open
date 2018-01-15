const mongoose = require('mongoose');
const axios = require('axios');
const keys = require('../config/keys');
const constants = require('../helpers/constants');
const Place = mongoose.model('place');

module.exports = app => {
  app.get('/search/predictions', async (req, res) => {
    const input = req.query.input;

    if (!input) {
      res.status(400).send('You need to provide search string');
    }

    const uri = `${constants.BASE_URI_AUTOCOMPLETE}${input}&key=${
      keys.googlePlacesKey
    }`;

    try {
      const predictions = await axios.get(uri);
      res.send(predictions.data);
    } catch (err) {
      res.send(err);
    }
  });

  app.get('/search/places', async (req, res) => {
    const ids = req.query.ids;

    if (!ids) {
      res.status(400).send('You need to provide place ids');
    }

    try {
      const places = await Promise.all(
        ids.map(async id => {
          const uri = `${constants.BASE_URI_PLACES}${id}&key=${
            keys.googlePlacesKey
          }`;

          const place = await await axios.get(uri);
          return place.data;
        })
      );
      res.send(places);
    } catch (err) {
      res.send(err);
    }
  });
};
