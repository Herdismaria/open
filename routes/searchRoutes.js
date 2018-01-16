const mongoose = require('mongoose');
const axios = require('axios');
const keys = require('../config/keys');
const constants = require('../helpers/constants');
const Place = mongoose.model('place');

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
      const places = predictions.data.predictions.map(des => ({
        title: des.structured_formatting.main_text,
        id: des.place_id,
        description: des.description,
        childKey: des.place_id,
      }));
      res.send(places);
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
