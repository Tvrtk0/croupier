// The pockets of the roulette wheel are numbered from 0 to 36.
// In number ranges from 1 to 10 and 19 to 28, odd numbers are red and even are black.
// In ranges from 11 to 18 and 29 to 36, odd numbers are black and even are red.
// There is a green pocket numbered 0 (zero).

const red = '#FF3B30'
const black = '#121212'

const pocketsColors = [
  { start: 1, end: 10, odd: red, even: black },
  { start: 19, end: 28, odd: red, even: black },
  { start: 11, end: 1, odd: black, even: red },
  { start: 29, end: 36, odd: black, even: red },
]

export function getPocketColor(value: number) {
  const isEven = value % 2 === 0
  const pocketRange = pocketsColors.find(range => value >= range.start && value <= range.end)

  if (!pocketRange) return 'green'
  return isEven ? pocketRange.even : pocketRange.odd
}
