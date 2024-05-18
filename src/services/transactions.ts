import { useCallback, useEffect, useState } from 'react'
import { API_URL } from './api'

type Transaction = {
  acccount_from_id: number
  acccount_to_id: number
  money: number
  history_id: number
  datatransaction: string
  category: string
  description: string
  verification: boolean
}

export const useGetTransactionsQuery = (
  _?: unknown,
  options?: { skip?: boolean }
) => {
  const [data, setData] = useState<Transaction[]>([])

  const [isLoading, setIsLoading] = useState(false)

  const [error, setError] = useState()

  const refetch = useCallback(async () => {
    if (options?.skip) return
    try {
      setIsLoading(true)
      const response = await (await fetch(`${API_URL}/transactions`)).json()
      setData(response)
    } catch (error) {
      // will be rewritten with redux toolki query anyway
      // @ts-expect-error Argument of type 'unknown' is not assignable to parameter of type 'SetStateAction<undefined>'.
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }, [options?.skip])

  useEffect(() => {
    refetch()
  }, [refetch])

  return { data, error, isLoading, refetch }
}
