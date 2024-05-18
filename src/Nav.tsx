import { Link } from 'react-router-dom'

export function Nav() {
  return (
    <nav className='hidden md:flex max-w-screen-xl flex-wrap items-center justify-between mx-auto p-4 border-gray-200'>
      <a
        href='https://itonecareer.ru/hackathon'
        className='flex items-center space-x-3 rtl:space-x-reverse'
      >
        <img
          src='logo.svg'
          width='24'
          height='24'
          className='h-8'
          alt='MoneyKeeper Logo'
        />
        <span className='self-center text-2xl font-semibold whitespace-nowrap'>
          MoneyKeeper
        </span>
      </a>
      <div className='hidden w-full md:block md:w-auto'>
        <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700'>
          <li>
            <Link
              to='/'
              className='rounded hover:text-blue-700 dark:hover:text-blue-500'
              aria-current='page'
            >
              Главная
            </Link>
          </li>
          <li>
            <Link
              to='/'
              className='rounded hover:text-blue-700 dark:hover:text-blue-500'
            >
              Кошелёк
            </Link>
          </li>
          <li>
            <Link
              to='/'
              className='rounded hover:text-blue-700 dark:hover:text-blue-500'
            >
              Настройки
            </Link>
          </li>
          <li>
            <Link
              to='/'
              className='rounded hover:text-blue-700 dark:hover:text-blue-500'
            >
              Профиль
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
