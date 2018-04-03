import { keyframes } from 'styled-components';

/**
 * Global constants: Colors, animations, grid, etc
 */

const type = {
  baseSize: '1.2rem',
  smaller: '1rem'
};

const spacing = {
  smaller: 6,
  small: 12,
  normal: 18,
  medium: 24,
  big: 36,
  bigger: 42
};

const breakpoints = {
  mobile: '500px',
  tablet: '800px'
}

const animations = {
  borderIn: keyframes`
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  `,
  scaleIn: keyframes`
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  `,
  fadeIn: keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `,
  growIn: keyframes`
    from {
      width: 100%;
    }
    to {
      width: 40%;
    }
  `,
  growUp: keyframes`
    from {
      height: inherit;
    }
    to {
      height: 200px;
    }
  `,
  starScale: keyframes`
    0% {
      width: 60%;
    }
    20% {
      width: 150%;
    }
    40% {
      width: 300%;
    }
    60% {
      width: 600%;
    }
    80% {
      width: 1100%;
    }
    100% {
      width: 900%;
    }
  `,
  show: keyframes`
    from {
      visibility: hidden;
    }
    to {
      visibility: visible;
    }
  `,
  showBg: keyframes`
    from {
      background-color: ${props => props.theme.bg};
    }
    to {
      background-color: ${props => props.theme.fg};
    }
  `,
};


export { type, spacing, animations, breakpoints };
