import { http, HttpResponse } from 'msw'
import { API_URL } from '../services/api'
import { db } from './db'

const delay = (ms?: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const handlers = [
  http.get(`${API_URL}/transactions`, () => {
    return HttpResponse.json(
      db.transaction.getAll().map(({ category, ...rest }) => ({
        ...rest,
        category: category?.name,
        user_category_id: category?.id
      }))
    )
  }),

  http.post(`${API_URL}/transactions`, async ({ request }) => {
    // @ts-ignore
    const { user_category_id, ...body } = await request.json()

    console.log(user_category_id)
    const category = db.category.findFirst({
      where: {
        id: {
          equals: user_category_id
        }
      }
    })

    await delay(500)

    db.transaction.create({
      // @ts-ignore
      ...body,
      category
    })

    return HttpResponse.json({ status: 201 })
  }),

  http.get(`${API_URL}/categories`, () => {
    return HttpResponse.json(db.category.getAll())
  }),

  http.post(`${API_URL}/categories`, async ({ request }) => {
    // @ts-ignore
    const data = await request.json()

    await delay(500)

    db.category.create({
      // @ts-ignore
      ...data
    })

    return HttpResponse.json({ status: 201 })
  })
]
