import { css } from 'styled-components';

const sizes = {
  desktop: 992,
  tablet: 800,
  phone: 450,
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

const days = [
  'Sunnudagar',
  'Mánudagar',
  'Þriðjudagar',
  'Miðvikudagar',
  'Fimmtudagar',
  'Föstudagar',
  'Laugardagar',
];

/*const periods = [
  { close: { day: 1, time: '1400' }, open: { day: 1, time: '1100' } },
  { close: { day: 1, time: '2200' }, open: { day: 1, time: '1900' } },
  { close: { day: 2, time: '1400' }, open: { day: 2, time: '1100' } },
  { close: { day: 2, time: '2200' }, open: { day: 2, time: '1900' } },
  { close: { day: 3, time: '1400' }, open: { day: 3, time: '1100' } },
  { close: { day: 3, time: '2200' }, open: { day: 3, time: '1900' } },
  { close: { day: 4, time: '1400' }, open: { day: 4, time: '1100' } },
  { close: { day: 4, time: '2200' }, open: { day: 4, time: '1900' } },
  { close: { day: 5, time: '1400' }, open: { day: 5, time: '1100' } },
  { close: { day: 5, time: '2200' }, open: { day: 5, time: '1900' } },
  { close: { day: 6, time: '2200' }, open: { day: 6, time: '1100' } },
];*/

const createTimeStrings = item => ({
  day: item.open.day,
  time: `${item.open.time
    .split('')
    .reduce(addColon, [])
    .join('')} - ${item.close.time
    .split('')
    .reduce(addColon, [])
    .join('')}`,
});

const addColon = (acc, curr, index) =>
  index == 2 ? [...acc, ':', curr] : [...acc, curr];

const getHoursbyDay = (acc, curr) => {
  let time = acc[curr.day];
  let newTime = [...time, curr.time];
  return Object.assign([], acc, { [curr.day]: newTime });
};

export const getOpeningHours = periods => {
  return periods
    .map(createTimeStrings)
    .reduce(getHoursbyDay, days.map(d => []))
    .map((arr, index) => {
      const hours = arr.length === 0 ? 'Lokað' : arr.join(' og ');
      return `${days[index]}: ${hours}`;
    });
};

/*openingHoursInfo.reduce((res, val) => {
  const day = val.close.day;
  return {
    ...res,
    [day]: [...(res[day] || []), [val.open.time, val.close.time]],
  };
}, {});*/

/*days.map((day, index) => {
  if (periods[index]) {
    return `${day} ${periods[index]}`;
  } else {
    // closed
  }
  return;
});*/
