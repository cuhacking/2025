import type * as z from 'zod'
import { json } from '@remix-run/react'

export async function postForm(_values: z.infer<any>) {
  // takes the values and create an entry

  return json({ someData: 'value' })
}

export async function patchForm(_values: z.infer<any>) {
  // takes the values and update entry
  return new Response('Successfully updated form entry', { status: 200 })
}

export async function getFormSubmission(_userID: string, _formID: string) {
  return new Response('Obtained form data', { status: 200 })
}
