export interface GenericBody {
  text: string
  buttonLink?: string
  buttonText?: string
}

export interface GenericContent {
  body: GenericBody[]
  title: string
}
