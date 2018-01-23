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

export const states = {
  inactive: 'INACTIVE',
  active: 'ACTIVE',
};

export const eases = {
  entrance: {
    animationTimingFunction: `cubic-breizer(0.39, 0.575, 0.565, 1)`,
  },
  entranceEmphasis: {
    animationTimingFunction: `cubic-breizer(0.175, 0.885, 0.32, 1.275)`,
  },
  exit: {
    animationTimingFunction: `cubic-breizer(0.47, 0, 0.745, 0.715)`,
  },
  exitEmphasis: {
    animationTimingFunction: `cubic-breizer(0.6, -0.28, 0.735, 0.045)`,
  },
};

export const timing = {
  t1: {
    animationDuration: 0.1,
  },
  t2: {
    animationDuration: 0.15,
  },
  t3: {
    animationDuration: 0.2,
  },
  t4: {
    animationDuration: 0.25,
  },
  t5: {
    animationDuration: 0.3,
  },
};
