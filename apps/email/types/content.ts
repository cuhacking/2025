export interface GenericEmailBody {
  text: string
  buttonLink?: string
  buttonText?: string
}

export interface GenericEmailContent {
  body: GenericEmailBody[]
  title: string
}
