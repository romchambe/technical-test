export interface PaginatedList<T> {
  count: number
  next: string | null
  previous: string | null
  results: T[] | null
}

export const EMPTY_PAGINATED_RESPONSE = { count: 0, next: null, previous: null, results: [] }