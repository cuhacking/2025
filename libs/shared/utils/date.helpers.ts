export function getDayOfMonth(date: Date): number {
  return date.getDate()
}

export function getMonth(date: Date): string {
  return date.toLocaleString('default', { month: 'short' })
}

export function getDatePostfix(date: Date): string {
  const day = getDayOfMonth(date)
  if (day === 1 || day === 21 || day === 31)
    return 'st'
  if (day === 2 || day === 22)
    return 'nd'
  if (day === 3 || day === 23)
    return 'rd'
  return 'th'
}
