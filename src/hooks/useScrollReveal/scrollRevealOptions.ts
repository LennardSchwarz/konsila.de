export type ScrollRevealOptionType = {
  delay?: number;
  interval?: number;
  origin?: string;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const scrollRevealOptions = ({
  delay,
  interval,
  origin,
}: ScrollRevealOptionType) => {
  return {
    origin: origin || 'bottom',
    distance: '15px',
    duration: 500,
    delay: delay || 200,
    interval: interval || 0,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  };
};
