/**
 * This function gets the base URL of the current environment.
 * @returns The base URL.
 */
export function getBaseUrl() {
  if (typeof window !== 'undefined') {
    return window.location.origin
  }

  return `http://localhost:${String(3000)}`
}
