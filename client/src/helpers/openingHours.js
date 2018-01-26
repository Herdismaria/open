const days = [
  'Sunnudagar',
  'Mánudagar',
  'Þriðjudagar',
  'Miðvikudagar',
  'Fimmtudagar',
  'Föstudagar',
  'Laugardagar',
];

const createTimeStrings = item => {
  return {
    day: item.open.day,
    time: `${item.open.time
      .split('')
      .reduce(addColon, [])
      .join('')} - ${item.close.time
      .split('')
      .reduce(addColon, [])
      .join('')}`,
  };
};

const addColon = (acc, curr, index) =>
  index === 2 ? [...acc, ':', curr] : [...acc, curr];

const getHoursbyDay = (acc, curr) => {
  let time = acc[curr.day];
  let newTime = [...time, curr.time];
  return Object.assign([], acc, { [curr.day]: newTime });
};

export const getOpeningHours = periods => {
  /* Clients can rely on always-open being represented
  as an open period containing day with value 0 and
  time with value 0000, and no close.
  */
  if (
    periods.length === 1 &&
    periods[0].open.day === 0 &&
    periods[0].open.time === '0000'
  ) {
    return ['Opið allan sólarhringinn alla daga'];
  }

  // otherwise, parse openinghours
  return periods
    .map(createTimeStrings)
    .reduce(getHoursbyDay, days.map(d => []))
    .map((arr, index) => {
      const hours = arr.length === 0 ? 'Lokað' : arr.join(' og ');
      return `${days[index]}: ${hours}`;
    });
};
