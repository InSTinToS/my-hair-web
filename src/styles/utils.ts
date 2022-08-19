export const utils = {
  theme: (theme: string) => ({
    color: `${theme}_text`,
    backgroundColor: `${theme}_color`
  }),
  flexCenter: (direction: 'row' | 'col') => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: direction === 'col' ? 'column' : 'row'
  }),
  windowSize: (value: number) => ({
    width: `${value}vw`,
    height: `${value}vh`
  }),
  size: (value: string | number) => ({ width: value, height: value })
}
