import { api, omitBlankEntries } from './api'

export type Transaction = {
  acccount_from_id: number
  acccount_to_id: number
  money: number
  history_id: string
  datatransaction: string
  category: string
  description: string
  verification: boolean
  id: string
}

const transactionApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTransactions: builder.query<
      Transaction[],
      { offset?: number; limit?: number } | void
    >({
      query: (params) => ({
        url: `transactions`,
        params: omitBlankEntries(params)
      }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: 'Transaction', id }) as const),
        { type: 'Transaction' as const, id: 'LIST' }
      ]
    }),
    getTransaction: builder.query<Transaction, string>({
      query: (id) => `transactions/${id}`,
      providesTags: (_result, _err, id) => [{ type: 'Transaction', id }]
    }),
    updateTransaction: builder.mutation<void, Partial<Transaction>>({
      query: ({ id, ...body }) => ({
        url: `transactions/${id}`,
        method: 'PUT',
        body
      }),
      invalidatesTags: (_result, _err, { id }) => [{ type: 'Transaction', id }]
    }),
    createTransaction: builder.mutation<void, Partial<Transaction>>({
      query: (body) => ({ url: `transactions`, method: 'POST', body }),
      invalidatesTags: () => ['Transaction']
    }),
    deleteTransaction: builder.mutation<void, string | number>({
      query: (id) => ({ url: `transactions/${id}`, method: 'DELETE' }),
      invalidatesTags: () => ['Transaction']
    })
  })
})

export const {
  useGetTransactionQuery,
  useGetTransactionsQuery,
  useUpdateTransactionMutation,
  useCreateTransactionMutation,
  useDeleteTransactionMutation
} = transactionApi
