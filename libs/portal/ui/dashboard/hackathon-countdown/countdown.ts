export function getCountdownTo(date: Date): { days: number, hrs: number, mins: number, secs: number } {
  const now = new Date()

  // if (now > date) {
  //   throw new Error('Target date must be in the future.')
  // }

  let diff = date.getTime() - now.getTime()

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  diff -= days * 1000 * 60 * 60 * 24

  const hrs = Math.floor(diff / (1000 * 60 * 60))
  diff -= hrs * 1000 * 60 * 60

  const mins = Math.floor(diff / (1000 * 60))
  diff -= mins * 1000 * 60

  const secs = Math.floor(diff / 1000)

  return { days, hrs, mins, secs }
}
