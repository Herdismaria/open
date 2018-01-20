import { TweenMax, Elastic, TimelineLite } from 'gsap';

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

  multipleCardsEntrance: (target, cb) => {
    var tl = new TimelineLite();
    tl.staggerFrom(
      target,
      0.5,
      {
        x: 200,
        opacity: 0,
      },
      0.2
    );
  },

  multipleCardsExit: (target, cb) => {
    var tl = new TimelineLite();
    tl.staggerTo(
      target,
      0.5,
      {
        x: -200,
        opacity: 0,
      },
      0.2
    );
  },

  grow: (target, delay, cb) =>
    TweenMax.to(target, 3, {
      height: 400,
      width: 600,
      onComplete() {
        cb();
      },

      ease: Elastic.easeOut.config(0.25, 1),
      delay: delay,
    }),

  shrink: (target, delay, cb) =>
    TweenMax.to(target, 3, {
      height: 100,
      width: 300,
      onComplete() {
        cb();
      },

      ease: Elastic.easeOut.config(0.25, 1),
      delay: delay,
    }),
};
