const mongoose = require('mongoose');
const { Schema } = mongoose;

const placeSchema = new Schema({
  _placeId: { type: Schema.Types.ObjectId, ref: 'PlaceId' },
  name: String,
  addressComponents: [
    {
      longName: String,
      shortName: String,
      types: [String],
    },
  ],
  formattedAddress: String,
  icon: String,
  phone: String,
  NumberofClicks: { type: Number, default: 0 },
  openingHours: [
    {
      open: {
        day: Number,
        time: String,
      },
      close: {
        day: Number,
        time: String,
      },
    },
  ],
  types: [String],
  website: String,
});

mongoose.model('place', placeSchema);
