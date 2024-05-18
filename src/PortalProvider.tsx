/* eslint-disable  @typescript-eslint/no-explicit-any */
/* eslint-disable  react-refresh/only-export-components */

import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState
} from 'react'
import { createPortal } from 'react-dom'

// TODO: JSX.Element -> ReactNode
// NOTE: should probably put it somewhere else

export type InteractableProps<T = any> = {
  show?: boolean
  success?: <T = any>(result?: T) => void
  abort?: () => void
  onMount?: () => void
} & { [key: string]: T }

const PortalContext = createContext<{
  show: <T = any>(
    component: React.ElementType,
    props?: InteractableProps
  ) => Promise<T>
  hide: () => void
  isActive: boolean
}>({
  // @ts-expect-error Type '() => Promise<void>' is not assignable to type '<T = any>(callback: (props: InteractableProps<T>) => Element) => Promise<T>'
  show: async () => {},
  hide: () => {},
  isActive: false
})

export type PortalProviderProps = unknown

export function PortalProvider({
  children
}: PropsWithChildren<PortalProviderProps>) {
  const [Interactable, setInteractable] = useState<React.ElementType>(
    () => () => <></>
  )

  const [interactableProps, setInteractableProps] = useState({})

  const [isActive, setIsActive] = useState(false)

  const hide = useCallback(async () => {
    setIsActive(false)
    // NOTE: should probably look into TransitionGroup
    // wait for transition animation to end and then remove element from DOM
    await new Promise((resolve) => setTimeout(resolve, 150))
    setInteractable(() => () => <></>)
  }, [])

  const show = useCallback(
    async (component: React.ElementType, props?: InteractableProps) => {
      try {
        setInteractable(() => component)

        // TODO: replace promise's any with reasonable type
        const response = await new Promise<any>((resolve, reject) => {
          setInteractableProps({
            success: (value: any) => {
              resolve(value)
              hide()
            },
            abort: () => {
              reject()
              hide()
            },
            ...props
          })
        })
        return response
      } catch (error) {
        return error
      }
    },
    [hide]
  )
  const handleInteractableMount = useCallback(() => {
    setIsActive(true)
  }, [])

  return (
    <PortalContext.Provider
      value={{
        show,
        hide,
        isActive
      }}
    >
      {children}
      {createPortal(
        <Interactable
          {...interactableProps}
          show={isActive}
          onMount={handleInteractableMount}
        />,
        document.body
      )}
    </PortalContext.Provider>
  )
}

export const usePortalContext = () => useContext(PortalContext)
