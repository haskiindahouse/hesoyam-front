import { http, HttpResponse } from 'msw'
import { API_URL } from '../services/api'
import { db } from './db'

const delay = (ms?: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const handlers = [
  http.get(`${API_URL}/transactions`, () => {
    return HttpResponse.json(db.transaction.getAll())
  }),

  http.post(`${API_URL}/transactions`, async ({ request }) => {
    // @ts-ignore
    const data = await request.json()

    await delay(500)

    db.transaction.create({
      // @ts-ignore
      ...data
    })

    return HttpResponse.json({ status: 201 })
  })
]
