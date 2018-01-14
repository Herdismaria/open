const axios = require('axios');
const keys = require('../config/keys');
const constants = require('../helpers/constants');

module.exports = app => {
  app.post('/search', async (req, res) => {
    const uri = `${constants.BASE_URI_AUTOCOMPLETE}${req.body.query}&key=${
      keys.googlePlacesKey
    }`;

    try {
      const predictions = await axios.get(uri);
      res.send(predictions.data);
    } catch (err) {
      res.send(err);
    }
  });
};
