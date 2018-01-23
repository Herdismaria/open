const suggestionsFactory = suggestion => ({
  title: suggestion.structured_formatting.main_text,
  id: suggestion.place_id,
  description: suggestion.description,
  childKey: suggestion.place_id,
  address: suggestion.structured_formatting.secondary_text,
});

const placeFactory = place => ({
  addressComponents: place.address_components,
  address: place.formatted_address,
  phoneNumber: place.formatted_phone_number,
  icon: place.icon,
  internationalPhoneNumber: place.international_phone_number,
  name: place.name,
  openingHours: place.opening_hours,
  id: place.place_id,
  types: place.types,
  website: place.website,
  vicinity: place.vicinity,
});

module.exports = {
  placeFactory,
  suggestionsFactory,
};
