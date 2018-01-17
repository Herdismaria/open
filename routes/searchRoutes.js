const mongoose = require('mongoose');
const axios = require('axios');
const keys = require('../config/keys');
const constants = require('../helpers/constants');
const Place = mongoose.model('place');
const factories = require('../helpers/factories');

module.exports = app => {
  app.get('/search/predictions', async (req, res) => {
    const value = req.query.value;

    if (!value) {
      res.status(400).send('You need to provide search string');
    }

    const uri = encodeURI(
      `${constants.BASE_URI_AUTOCOMPLETE}${value}&key=${keys.googlePlacesKey}`
    );
    try {
      const predictions = await axios.get(uri);
      const places = predictions.data.predictions.map(des =>
        factories.suggestionsFactory(des)
      );
      res.send(places);
    } catch (err) {
      res.send(err);
    }
  });

  app.get('/search/places', async (req, res) => {
    const id = req.query.id;

    if (!id) {
      res.status(400).send('You need to provide place ids');
    }

    const uri = `${constants.BASE_URI_PLACES}${id}&key=${keys.googlePlacesKey}`;

    try {
      const response = await axios.get(uri);
      const place = factories.placeFactory(response.data.result);
      res.send(factories.placeFactory(place));
    } catch (err) {
      res.send(err);
    }
  });
};
