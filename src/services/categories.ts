import { api, omitBlankEntries } from './api'

export type Category = {
  id: string
  name: string
  emoji: string
  theme_color: string
}

const categoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<
      Category[],
      { offset?: number; limit?: number } | void
    >({
      query: (params) => ({
        url: `categories`,
        params: omitBlankEntries(params)
      }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: 'Category', id }) as const),
        { type: 'Category' as const, id: 'LIST' }
      ]
    }),
    getCategory: builder.query<Category, string>({
      query: (id) => `categories/${id}`,
      providesTags: (_result, _err, id) => [{ type: 'Category', id }]
    }),
    updateCategory: builder.mutation<void, Partial<Category>>({
      query: ({ id, ...body }) => ({
        url: `categories/${id}`,
        method: 'PUT',
        body
      }),
      invalidatesTags: (_result, _err, { id }) => [{ type: 'Category', id }]
    }),
    createCategory: builder.mutation<void, Partial<Category>>({
      query: (body) => ({ url: `categories`, method: 'POST', body }),
      invalidatesTags: () => ['Category']
    }),
    deleteCategory: builder.mutation<void, string | number>({
      query: (id) => ({ url: `categories/${id}`, method: 'DELETE' }),
      invalidatesTags: () => ['Category']
    })
  })
})

export const {
  useGetCategoriesQuery,
  useGetCategoryQuery,
  useUpdateCategoryMutation,
  useCreateCategoryMutation,
  useDeleteCategoryMutation
} = categoryApi
