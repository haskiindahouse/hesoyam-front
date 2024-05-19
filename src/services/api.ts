import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const API_URL =
  import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1'

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL
  // credentials: 'include',
  // redirect: 'manual',
})

export const api = createApi({
  /*
   * `reducerPath` is optional and will not be required by most users.
   * This is useful if you have multiple API definitions,
   * e.g. where each has a different domain, with no interaction between endpoints.
   * Otherwise, a single API definition should be used in order to support tag invalidation,
   * among other features
   */
  reducerPath: 'splitApi',
  baseQuery: baseQuery,
  /**
   * Tag types must be defined in the original API definition
   * for any tags that would be provided by injected endpoints
   */
  // refetchOnReconnect: true,
  // refetchOnFocus: true,
  // refetchOnMountOrArgChange: true,
  tagTypes: ['Transaction', 'Category'],
  endpoints: () => ({})
})

/**
 * Removes all entries which values are empty strings
 * @param o {Object}
 * @returns Returns a new object without modifying the original
 */
export const omitBlankEntries = <T>(o: T | undefined | null | void) => {
  if (typeof o !== 'object' || Array.isArray(o) || o == null) return {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return Object.fromEntries(Object.entries(o).filter(([_, v]) => v !== ''))
}
