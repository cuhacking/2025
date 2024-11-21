export function validateDate(date: string): boolean {
  const dateRegex = /^\d{4}\/\d{2}\/\d{2}$/
  if (!dateRegex.test(date)) {
    return false
  }

  const [year, month, day] = date.split('/').map(Number)
  if (year < 1900 || year > 2100 || month < 1 || month > 12 || day < 1 || day > 31) {
    return false
  }
  if (month === 2) {
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    if (day > 29 || (day === 29 && !isLeapYear)) {
      return false
    }
  }
  if ([4, 6, 9, 11].includes(month) && day > 30) {
    return false
  }

  return true
}

export function validateTime(time: string): boolean {
  const timeRegex = /^(?:[01]\d|2[0-3]):[0-5]\d (?:AM|PM)$/
  return timeRegex.test(time)
}

export function validateStudentID(studentId: number): boolean {
  return studentId >= 100000000 && studentId <= 111111111
}

export function validateCarletonEmail(email: string): boolean {
  const emailParts = email.split('@')
  return emailParts.length === 2 && emailParts[1] === 'cmail.carleton.ca'
}
