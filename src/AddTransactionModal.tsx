import { InteractableProps } from './PortalProvider'
import { useEffect } from 'react'

export function AddTransactionModal({
  show,
  success,
  abort,
  onMount
}: InteractableProps) {
  useEffect(() => {
    onMount?.()
  }, [onMount])

  return (
    <div
      tabIndex={-1}
      aria-hidden={show ? 'false' : 'true'}
      className={`${show ? 'translate-y-0' : 'translate-y-full'} bg-black/10 backdrop-blur-md flex transition-all overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full max-h-full`}
    >
      <div className='relative p-4 w-full max-w-2xl max-h-full'>
        <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
          <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600'>
            <h3 className='text-xl font-semibold'>Новая операция</h3>
            <button
              type='button'
              className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
              onClick={abort}
            >
              <svg
                className='w-3 h-3'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 14'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                />
              </svg>
              <span className='sr-only'>Close modal</span>
            </button>
          </div>
          <div className='p-4 md:p-5 space-y-4'>
            <div className='border-b border-gray-200 dark:border-gray-700'>
              <ul className='flex -mb-px text-sm font-medium text-center justify-between overflow-auto'>
                <li className='me-2'>
                  <a
                    href='#'
                    className='inline-flex gap-1 items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group'
                  >
                    <img src='/chart-line-down.svg' alt='Расход' />
                    Расход
                  </a>
                </li>
                <li className='me-2'>
                  <a
                    href='#'
                    className='inline-flex gap-1 items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group'
                    aria-current='page'
                  >
                    <img src='/chart-line-up.svg' alt='Доход' />
                    Доход
                  </a>
                </li>
                <li className='me-2'>
                  <a
                    href='#'
                    className='inline-flex gap-1 items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group'
                  >
                    <img src='/sort-horizontal.svg' alt='Перевод' />
                    Перевод
                  </a>
                </li>
                <li className='me-2'>
                  <a
                    href='#'
                    className='inline-flex gap-1 items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 group'
                  >
                    <img src='/refresh.svg' alt='Долг' />
                    Долг
                  </a>
                </li>
              </ul>
            </div>
            <form
              className='mx-auto flex flex-col gap-4'
              onSubmit={(event) => {
                event.preventDefault()
                success?.('DONE')
              }}
            >
              <div className='relative'>
                <div className='absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none'>
                  ₽
                </div>
                <input
                  type='number'
                  className='outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  pattern='^\d{5}(-\d{4})?$'
                />
              </div>

              <div className='flex flex-col justify-center'>
                <small className='text-center'>Откуда потратили?</small>
                <div className='p-4 border border-gray-100 dark:border-transparent bg-primary rounded-lg flex gap-2 *:grow *:basis-0 overflow-auto'>
                  <div className='flex flex-col gap-1 items-center'>
                    <p className='text-sm'>Наличные</p>
                    <div className='rounded-full p-2 bg-yellow-500 w-10 h-10'></div>
                    <span>0 ₽</span>
                  </div>

                  <div className='flex flex-col gap-1 items-center'>
                    <p className='text-sm'>Сбер</p>
                    <div className='rounded-full p-2 bg-green-500 w-10 h-10'></div>
                    <span>0 ₽</span>
                  </div>

                  <div className='flex flex-col gap-1 items-center'>
                    <p className='text-sm'>Тинькофф</p>
                    <div className='rounded-full p-2 bg-orange-500 w-10 h-10'></div>
                    <span>0 ₽</span>
                  </div>

                  <div className='flex flex-col gap-1 items-center h-full'>
                    <p className='text-sm'>Создать</p>
                    <div className='rounded-full p-2 bg-gray-500/10 w-10 h-10 border border-dashed border-black text-center'>
                      +
                    </div>
                    <span className='text-secondary text-xs'>Счёт</span>
                  </div>
                </div>
              </div>

              <div className='flex flex-col justify-center'>
                <small className='text-center'>На что потратили?</small>
                <div className='p-4 border border-gray-100 dark:border-transparent bg-primary rounded-lg flex gap-2 *:grow *:basis-0 overflow-auto'>
                  <div className='flex flex-col gap-1 items-center'>
                    <p className='text-sm'>Продукты</p>
                    <div className='rounded-full p-2 bg-cyan-500 w-10 h-10'></div>
                  </div>

                  <div className='flex flex-col gap-1 items-center'>
                    <p className='text-sm'>Развлечения</p>
                    <div className='rounded-full p-2 bg-cyan-500 w-10 h-10'></div>
                  </div>

                  <div className='flex flex-col gap-1 items-center'>
                    <p className='text-sm'>Транспорт</p>
                    <div className='rounded-full p-2 bg-cyan-500 w-10 h-10'></div>
                  </div>

                  <div className='flex flex-col gap-1 items-center h-full'>
                    <p className='text-sm'>Категория</p>
                    <div className='rounded-full p-2 bg-cyan-500/10 w-10 h-10 border border-dashed border-black text-center'>
                      +
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600'>
                <button
                  type='submit'
                  className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  Добавить
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
