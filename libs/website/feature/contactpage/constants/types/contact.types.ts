export interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}
