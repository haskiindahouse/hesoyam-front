export function Home() {
  return (
    <section className='flex  min-h-screen flex-col gap-4 p-3'>
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
    </section>
  )
}
