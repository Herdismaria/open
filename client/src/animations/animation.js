import { TweenMax, Elastic } from 'gsap';
import { keyframes } from 'styled-components';

const duration = 3;
export default {
  cardEntrance: (target, delay, cb) => {
    console.log(delay);
    return TweenMax.from(target, 0.3, { opacity: 0, onComplete: cb });
  },

  cardExit: (target, delay, cb) =>
    TweenMax.to(target, duration, {
      opacity: 0,
      x: -200,
      onComplete() {
        cb();
      },

      ease: Elastic.easeOut.config(0.25, 1),
      delay: delay,
    }),

  slideUp: (target, delay, cb) =>
    TweenMax.to(target, duration, {
      y: 0,
      onComplete() {
        cb();
      },

      ease: Elastic.easeOut.config(0.25, 1),
      delay: delay,
    }),
  slideDown: (target, delay, cb) =>
    TweenMax.to(target, duration, {
      y: 200,
      onComplete() {
        cb();
      },

      ease: Elastic.easeOut.config(0.25, 1),
      delay: delay,
    }),
  tick: keyframes`
      0% {
        transform: rotate(0deg)
      }
      100% {
         transform: rotate(360deg)
      }
    `,
};
