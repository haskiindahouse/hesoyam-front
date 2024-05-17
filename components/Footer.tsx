import HomeIcon from '@/public/home.svg'
import WalletIcon from '@/public/wallet.svg'
import SettingsIcon from '@/public/settings.svg'
import AvatarIcon from '@/public/avatar.svg'

import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className='md:hidden'>
      <div className='fixed bottom-0 left-0 z-50 w-full h-16 bg-secondary border-t border-gray-200 dark:border-gray-600'>
        <ul className='grid h-full max-w-lg grid-cols-4 mx-auto font-medium'>
          <Link
            href='/'
            className='inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group'
          >
            <Image
              src={HomeIcon}
              alt='Главная'
              className='w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500'
            />
            <span className='text-sm group-hover:text-blue-600 dark:group-hover:text-blue-500'>
              Главная
            </span>
          </Link>
          <Link
            href='/'
            className='inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group'
          >
            <Image
              src={WalletIcon}
              alt='Кошелёк'
              className='w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500'
            />
            <span className='text-sm group-hover:text-blue-600 dark:group-hover:text-blue-500'>
              Кошелёк
            </span>
          </Link>
          <Link
            href='/'
            className='inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group'
          >
            <Image
              src={SettingsIcon}
              alt='Настройки'
              className='w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500'
            />
            <span className='text-sm group-hover:text-blue-600 dark:group-hover:text-blue-500'>
              Настройки
            </span>
          </Link>
          <Link
            href='/'
            className='inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group'
          >
            <Image
              src={AvatarIcon}
              alt='Профиль'
              className='w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500'
            />
            <span className='text-sm group-hover:text-blue-600 dark:group-hover:text-blue-500'>
              Профиль
            </span>
          </Link>
        </ul>
      </div>
    </footer>
  )
}