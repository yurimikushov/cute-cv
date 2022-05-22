import { keyframes } from 'styled-components'

export default {
  spin: keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `,
  'shake-with-delay': keyframes`
     0% { transform:translate(0,0) }
     1.78571% { transform:translate(3px, 0) }
     3.57143% { transform:translate(0, 0) }
     5.35714% { transform:translate(3px, 0) }
     7.14286% { transform:translate(0, 0) }
     8.92857% { transform:translate(3px, 0) }
     10.71429% { transform:translate(0, 0) }
     100% { transform:translate(0, 0) }
  `,
} as const
