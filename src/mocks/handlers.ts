import { http, HttpResponse } from 'msw'
import { API_URL } from '../services/api'
import { db } from './db'

export const handlers = [
  http.get(`${API_URL}/transactions`, () => {
    return HttpResponse.json(db.transaction.getAll())
  })
]
