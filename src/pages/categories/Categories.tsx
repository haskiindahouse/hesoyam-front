import { Category, useGetCategoriesQuery } from 'src/services/categories'
import { CreateCategoryModal } from './CreateCategoryModal'
import { usePortalContext } from 'src/PortalProvider'

export function Categories() {
  const { data: categories } = useGetCategoriesQuery()

  const modalContext = usePortalContext()

  const handleCreateCategoryButtonClick = async () => {
    try {
      await modalContext.show<Partial<Category>>((props) => (
        <CreateCategoryModal {...props} />
      ))
    } catch (error) {
      // user closed modal
    }
  }

  return (
    <section className='flex flex-col gap-4 p-3'>
      <h2 className='text-3xl font-semibold'>Категории</h2>

      <div className='p-4 border border-gray-100 dark:border-transparent bg-primary rounded-lg flex gap-2 *:grow *:basis-0 overflow-auto'>
        {categories?.map((category) => (
          <div key={category.id} className='flex flex-col gap-1 items-center'>
            <p className='text-sm'>{category.name}</p>
            <div className='rounded-full p-2 bg-cyan-500 w-10 h-10'></div>
          </div>
        ))}

        <div className='flex flex-col gap-1 items-center h-full'>
          <p className='text-sm'>Категория</p>
          <button
            className='rounded-full p-2 bg-cyan-500/10 w-10 h-10 border border-dashed border-black text-center'
            onClick={handleCreateCategoryButtonClick}
          >
            +
          </button>
        </div>
      </div>
    </section>
  )
}
