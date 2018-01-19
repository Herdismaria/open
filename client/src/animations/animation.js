import { TweenMax, Elastic } from 'gsap';

const duration = 0.5;
export default {
  cardEntrance: (target, delay, cb) =>
    TweenMax.from(target, duration, {
      opacity: 0,
      x: 200,
      onComplete() {
        cb();
      },
      ease: Elastic.easeOut.config(0.25, 1),
      delay: delay,
    }),
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
};
