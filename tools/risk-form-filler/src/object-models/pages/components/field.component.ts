// Encapsulate all field properties
export class Field<T> {
  constructor(
    public name: string,
    public type: T,
    public label: string,
    public required: boolean,
    public options?: string[],
    public maxLength?: number,
    public rows?: number,
    public format?: string,
    public subfields?: Record<string, Field<any>>,
    public matchField?: string,
  ) {
  }
}
