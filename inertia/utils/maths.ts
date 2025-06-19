export const randomInt = (min: number, max: number): number => {
  let rnd: number = Math.floor(Math.random() * (max - min) + min)
  // console.log('min:', min, 'rnd: ', rnd, 'max:', max)
  return rnd
}
