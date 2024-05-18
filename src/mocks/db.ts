import { factory, primaryKey } from '@mswjs/data'
import { fakerRU as faker } from '@faker-js/faker'

faker.seed(42)

export const db = factory({
  transaction: {
    id: primaryKey(faker.string.uuid),
    acccount_from_id: faker.number.int,
    acccount_to_id: faker.number.int,
    money: faker.number.int,
    history_id: faker.string.uuid,
    datatransaction: faker.date.recent,
    category: faker.word.noun,
    description: faker.word.words,
    verification: faker.datatype.boolean
  }
})

db.transaction.create()
