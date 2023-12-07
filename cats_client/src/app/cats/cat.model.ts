export interface Cat {
  id: number
  name: string
  breed: string
  birthday: Date
}

export type CatWithoutId = Omit<Cat, 'id'>