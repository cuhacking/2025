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

export function validateForm(values: FormData): FormErrors {
  const errors: FormErrors = {}

  /* Name validation */
  if (!values.name.trim()) {
    errors.name = 'Name is required'
  }
  else if (values.name.length < 2) {
    errors.name = 'Name must be at least 2 characters'
  }
  /* Email validation */
  if (!values.email) {
    errors.email = 'Email is required'
  }
  else if (!/^[\w.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  /* Subject validation */
  if (!values.subject.trim()) {
    errors.subject = 'Subject is required'
  }
  else if (values.subject.length < 3) {
    errors.subject = 'Subject must be at least 3 characters'
  }
  /* Message validation */
  if (!values.message.trim()) {
    errors.message = 'Message is required'
  }
  else if (values.message.length < 10) {
    errors.message = 'Message must be at least 10 characters'
  }

  return errors
}
