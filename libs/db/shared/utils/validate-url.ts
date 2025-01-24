// @ts-expect-error --> TODO: fix ts-language server error
export function validateURL(value) {
  try {
    // eslint-disable-next-line no-new
    new URL(value)
    return true
  }
  catch {
    return 'Invalid URL format'
  }
}
