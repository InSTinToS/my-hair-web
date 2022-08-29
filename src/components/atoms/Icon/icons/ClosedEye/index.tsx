import { Icon } from '../../'
import { IIconProps } from '../../types'

export const ClosedEye = ({ title, ...props }: IIconProps) => (
  <Icon viewBox='0 0 22 18' {...props}>
    <title>{title}</title>

    <path
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M5.48593 14.129C3.64093 12.819 2.18093 11.115 1.35593 10.039C1.12523 9.74198 1 9.37659 1 9.0005C1 8.62441 1.12523 8.25902 1.35593 7.962C2.84893 6.013 6.43093 2 10.6129 2C12.4889 2 14.2429 2.807 15.7429 3.874'
    />

    <path
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M8.61304 15.704C9.26224 15.8972 9.93569 15.9969 10.613 16C14.795 16 18.377 11.987 19.87 10.038C20.1007 9.74071 20.2258 9.37509 20.2256 8.99883C20.2254 8.62256 20.1 8.25707 19.869 7.96C19.3443 7.27549 18.7814 6.62112 18.183 6M12.743 6.887C12.4653 6.60467 12.1345 6.38011 11.7695 6.22629C11.4046 6.07246 11.0129 5.99241 10.6168 5.99075C10.2208 5.98909 9.82839 6.06586 9.46219 6.21662C9.09599 6.36738 8.76326 6.58916 8.4832 6.86915C8.20313 7.14915 7.98128 7.48183 7.83043 7.84799C7.67958 8.21416 7.60272 8.60657 7.60429 9.00259C7.60585 9.3986 7.68581 9.79039 7.83955 10.1554C7.99329 10.5203 8.21777 10.8512 8.50004 11.129L12.743 6.887ZM2.61304 17L18.613 1L2.61304 17Z'
    />
  </Icon>
)
