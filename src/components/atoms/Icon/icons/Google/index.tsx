import { Icon } from '../..'
import { IIconProps } from '../../types'

import { composeClassName } from 'utils/composeClassName'

export const Google = ({ className, ...props }: IIconProps) => (
  <Icon
    viewBox='0 0 39 39'
    className={composeClassName('Google', className)}
    {...props}
  >
    <g fillRule='evenodd' clipRule='evenodd'>
      <path
        fill='#4285F4'
        d='M38.2192 19.9426C38.2192 18.5599 38.0951 17.2304 37.8646 15.9541H19.4995V23.4968H29.9939C29.5418 25.9343 28.168 27.9994 26.1028 29.3821V34.2747H32.4047C36.0919 30.88 38.2192 25.8811 38.2192 19.9426Z'
      />

      <path
        fill='#34A853'
        d='M19.4993 38.9987C24.7642 38.9987 29.1782 37.2526 32.4045 34.2745L26.1026 29.3819C24.3565 30.5519 22.1229 31.2432 19.4993 31.2432C14.4205 31.2432 10.1218 27.8131 8.58838 23.2041H2.07373V28.2562C5.28231 34.629 11.8767 38.9987 19.4993 38.9987Z'
      />

      <path
        fill='#FBBC05'
        d='M8.5887 23.2046C8.19871 22.0347 7.97712 20.7849 7.97712 19.4997C7.97712 18.2145 8.19871 16.9648 8.5887 15.7948V10.7427H2.07405C0.753395 13.3751 0 16.3532 0 19.4997C0 22.6462 0.753395 25.6243 2.07405 28.2568L8.5887 23.2046Z'
      />

      <path
        fill='#EA4335'
        d='M19.4993 7.75548C22.3622 7.75548 24.9326 8.73932 26.9535 10.6715L32.5463 5.07873C29.1694 1.93222 24.7554 0 19.4993 0C11.8767 0 5.28231 4.36966 2.07373 10.7424L8.58838 15.7946C10.1218 11.1856 14.4205 7.75548 19.4993 7.75548Z'
      />
    </g>
  </Icon>
)