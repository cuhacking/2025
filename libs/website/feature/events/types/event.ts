export interface Event {
  title: string
  description: string
  date: Date
  status: 'upcoming' | 'past' | 'in-progress'// TODO: Utilze the status field in the button
  link: string // TODO: Refactor this out of the model
}
