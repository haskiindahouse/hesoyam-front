import { factory, oneOf, primaryKey } from '@mswjs/data'
import { fakerRU as faker } from '@faker-js/faker'

faker.seed(42)

// CREATE TABLE category
// (
//     id             BIGSERIAL PRIMARY KEY,
//     name           TEXT    NOT NULL,
//     emoji          TEXT    NOT NULL,
//     theme_color    TEXT    NOT NULL
// );
// CREATE TABLE transactions
// (
//     id               BIGSERIAL PRIMARY KEY,
//     money            DECIMAL(9, 2)            NOT NULL,
//     date_transaction TIMESTAMP WITH TIME ZONE NOT NULL,
//     category         VARCHAR(128)             NOT NULL,
//     user_category_id BIGINT,
//     description      VARCHAR(256),
//     is_verificated   BOOLEAN default false,
//
//     FOREIGN KEY (user_category_id) REFERENCES category (id)
// );
// CREATE TABLE budget
// (
//     id                  BIGSERIAL PRIMARY KEY,
//     title               TEXT                                     NOT NULL,
//     description         TEXT,
//     start_date          TIMESTAMP WITH TIME ZONE                 NOT NULL,
//     end_date            TIMESTAMP WITH TIME ZONE                 NOT NULL,
//     limit_budget        INTEGER                                  NOT NULL
// );
//
// CREATE TABLE budget_category
// (
//     id             BIGSERIAL PRIMARY KEY,
//     budget_id      BIGINT  NOT NULL,
//     category_id    BIGINT  NOT NULL,
//     spending_limit INTEGER NOT NULL,
//     FOREIGN KEY (budget_id) REFERENCES budget (id),
//     FOREIGN KEY (category_id) REFERENCES category (id)
// )

export const db = factory({
  category: {
    id: primaryKey(faker.string.uuid),
    name: faker.word.noun,
    emoji: faker.internet.emoji,
    theme_color: faker.internet.color
  },
  transaction: {
    id: primaryKey(faker.string.uuid),
    money: () => faker.number.float({ min: 10, max: 1000, fractionDigits: 2 }),
    date_transaction: faker.date.recent,
    category: oneOf('category'),
    description: faker.word.words,
    is_verificated: faker.datatype.boolean
  },
  budget: {
    id: primaryKey(faker.string.uuid),
    name: faker.word.noun,
    description: faker.word.words,
    start_date: faker.date.recent,
    end_date: faker.date.soon,
    limit_budget: () =>
      faker.number.float({ min: 10, max: 1000, fractionDigits: 2 })
  },
  budget_category: {
    id: primaryKey(faker.string.uuid),
    spending_limit: () =>
      faker.number.float({ min: 10, max: 1000, fractionDigits: 2 }),
    category: oneOf('category'),
    budget: oneOf('budget')
  }
})

const groceryCategory = db.category.create({
  name: 'Продукты'
})
const entertainmentCategory = db.category.create({
  name: 'Развлечения'
})
const travelCategory = db.category.create({
  name: 'Транспорт'
})

db.transaction.create({
  category: groceryCategory
})
db.transaction.create({
  category: groceryCategory
})
db.transaction.create({
  category: entertainmentCategory
})
db.transaction.create({
  category: travelCategory
})
