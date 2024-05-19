import { InteractableProps } from './PortalProvider'
import { useEffect } from 'react'
import { ReactComponent as CloseIcon } from 'src/assets/icons/close.svg'
import { useCreateCategoryMutation } from 'src/services/categories'
import { cx } from 'src/cx'

export function CreateCategoryModal({
  show,
  success,
  abort,
  onMount
}: InteractableProps) {
  useEffect(() => {
    onMount?.()
  }, [onMount])
  const [createCategory, { isLoading }] = useCreateCategoryMutation()

  return (
    <div
      tabIndex={-1}
      aria-hidden={show ? 'false' : 'true'}
      className={cx(
        'bg-black/10 backdrop-blur-md flex transition-all overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-end md:items-center w-full md:inset-0 h-full max-h-full',
        show ? 'backdrop-blur-md' : 'backdrop-blur-none'
      )}
    >
      <div
        className={cx(
          'relative w-full max-w-2xl transition-all',

          show ? 'translate-y-0' : 'translate-y-full'
        )}
      >
        <div className='relative bg-white rounded-t-2xl md:rounded-2xl shadow dark:bg-gray-700'>
          <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600'>
            <h3 className='text-xl font-semibold'>Новая категория</h3>
            <button
              type='button'
              className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
              onClick={abort}
            >
              <CloseIcon className='w-5 h-5' />
              <span className='sr-only'>Close modal</span>
            </button>
          </div>
          <div className='p-4 md:p-5 space-y-4'>
            <form
              className='mx-auto flex flex-col gap-4'
              onSubmit={async (event) => {
                event.preventDefault()

                try {
                  await createCategory({
                    // @ts-ignore
                    name: event.target.elements.name.value
                    // TODO: make other controls radio-like single select
                    // category_id: 1,
                    // payment_type_id: 1,
                    // origin_id: 1
                  })
                  success?.()
                } catch (error) {
                  //
                }
              }}
            >
              <input
                type='text'
                name='name'
                className='outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Название'
              />

              <div className='flex items-center rounded-b'>
                <button
                  type='submit'
                  className='w-full transition-all text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-black/10'
                  disabled={isLoading}
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
