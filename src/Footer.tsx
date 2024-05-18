import { Link } from 'react-router-dom'
import { usePortalContext } from './PortalProvider'
import { AddTransactionModal } from './AddTransactionModal'
import { Transaction } from './services/transactions'

export function Footer() {
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
    <footer className='md:hidden'>
      <div className='fixed bottom-0 left-0 z-50 w-full h-16 bg-secondary border-t border-gray-200 dark:border-gray-600'>
        <ul className='grid h-full max-w-lg grid-cols-3 mx-auto font-medium'>
          <Link
            to='/'
            className='inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group'
          >
            <img
              src='/home.svg'
              alt='Главная'
              className='w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500'
            />
            <span className='text-sm group-hover:text-blue-600 dark:group-hover:text-blue-500'>
              Главная
            </span>
          </Link>
          <button
            onClick={handleAddTransactionButtonClick}
            className='inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group'
            type='button'
          >
            <img
              src='/plus-circle.svg'
              alt='Кошелёк'
              className='w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500'
            />
            <span className='text-sm group-hover:text-blue-600 dark:group-hover:text-blue-500'>
              Добавить
            </span>
          </button>
          <Link
            to='/'
            className='inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group'
          >
            <img
              src='/settings.svg'
              alt='Настройки'
              className='w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500'
            />
            <span className='text-sm group-hover:text-blue-600 dark:group-hover:text-blue-500'>
              Настройки
            </span>
          </Link>
        </ul>
      </div>
    </footer>
  )
}
