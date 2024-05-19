import { PropsWithChildren } from 'react'
import { AddTransactionModal } from 'src/AddTransactionModal'
import { usePortalContext } from 'src/PortalProvider'
import { Transaction, useGetTransactionsQuery } from 'src/services/transactions'

export function Home() {
  const { data: transactions } = useGetTransactionsQuery()

  const modalContext = usePortalContext()

  const handleAddTransactionButtonClick = async () => {
    try {
      await modalContext.show<Partial<Transaction>>((props) => (
        <AddTransactionModal {...props} />
      ))
    } catch (error) {
      // user closed modal
    }
  }

  return (
    <section className='flex flex-col gap-4 p-3'>
      <button
        className='hidden md:block fixed right-10 bottom-10 p-0 w-12 h-12 text-white bg-blue-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none'
        onClick={handleAddTransactionButtonClick}
      >
        +
      </button>

      <h2 className='text-3xl font-semibold'>Первые шаги</h2>

      <div className='flex gap-4 no-wrap overflow-auto'>
        <div className='group rounded-lg border px-5 py-4 transition-colors border-gray-300  dark:border-neutral-700 dark:bg-neutral-800/30'>
          <p className='m-0 max-w-[30ch] text-balance text-sm opacity-50'>
            Подключить
          </p>

          <h2 className='text-2xl font-semibold'>
            Сбербанк&nbsp;
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
        </div>

        <div className='group rounded-lg border px-5 py-4 transition-colors border-gray-300  dark:border-neutral-700 dark:bg-neutral-800/30'>
          <p className='m-0 max-w-[30ch] text-balance text-sm opacity-50'>
            Подключить
          </p>

          <h2 className='text-2xl font-semibold'>
            Тинькофф&nbsp;
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
        </div>

        <div className='group rounded-lg border px-5 py-4 transition-colors border-gray-300  dark:border-neutral-700 dark:bg-neutral-800/30'>
          <p className='m-0 max-w-[30ch] text-balance text-sm opacity-50'>
            Подключить
          </p>

          <h2 className='text-2xl font-semibold'>
            Альфабанк&nbsp;
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
        </div>
      </div>

      <Card>
        <div className='flex justify-between'>
          <h3 className='text-2xl font-semibold mb-4'>Сегодня</h3>
          <span className='text-lg text-secondary'>
            {Math.round(
              (transactions?.reduce(
                (accumulator, current) => accumulator + current.money,
                0
              ) || 0 + Number.EPSILON) * 100
            ) / 100}
            &nbsp;₽
          </span>
        </div>

        <div className='flex flex-col gap-4'>
          {transactions?.map((transaction) => (
            <TransactionItem key={transaction.id} {...transaction} />
          ))}
        </div>
      </Card>

      <Card>
        <div className='flex justify-between'>
          <h3 className='text-2xl font-semibold mb-4'>Вчера</h3>
          <span className='text-lg text-secondary'>
            {Math.round(
              (transactions?.reduce(
                (accumulator, current) => accumulator + current.money,
                0
              ) || 0 + Number.EPSILON) * 100
            ) / 100}
            &nbsp;₽
          </span>
        </div>

        <div className='flex flex-col gap-4'>
          {transactions?.map((transaction) => (
            <TransactionItem key={transaction.id} {...transaction} />
          ))}
        </div>
      </Card>
    </section>
  )
}

function TransactionItem({ money, category, description }: Transaction) {
  return (
    <div className='flex gap-1 justify-between'>
      <div className='flex gap-2 align-start justify-between'>
        <div className='rounded-full p-2 bg-blue-500 w-10 h-10' />
        <div>
          <p className='leading-none'>{category}</p>
          <span className='text-sm leading-none'>{description}</span>
        </div>
      </div>
      <span className='text-lg font-semibold'>{money} ₽</span>
    </div>
  )
}

function Card({ children }: PropsWithChildren<unknown>) {
  return (
    <div className='group rounded-lg border px-5 py-4 transition-colors border-gray-300 dark:border-neutral-700 dark:bg-neutral-800/30'>
      {children}
    </div>
  )
}
