import Inertia, { Page as InertiaPage } from 'inertia'
import { Dispatch, FC, Key, MouseEvent, ReactNode, SetStateAction } from 'react'

interface AppProps<PageProps = {}> {
  children?: ({ Component: ReactNode, key: Key, props: PageProps }) => ReactNode
  initialPage: InertiaPage<PageProps>
  resolveComponent: (name: string) => ReactNode
}
type App<PageProps = {}> = FC<AppProps<PageProps>>

interface InertiaLinkProps {
  children?: ReactNode
  data?: object
  href: string
  method?: string
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
  preserveScroll?: boolean
  replace?: boolean
}
type InertiaLink = FC<InertiaLinkProps>

interface Page<PageProps = {}> {
  instance: ReactNode | null
  props: PageProps | {}
}

declare function usePage<PageProps = {}>(): Page<PageProps>

declare function usePageProps<PageProps = {}>(): PageProps

declare function useRememberedState<RememberedState>(
  initialState: RememberedState,
  key: string
): [RememberedState, Dispatch<SetStateAction<RememberedState>>]

export default App
export { Inertia, InertiaLink, Page, usePage, usePageProps, useRememberedState }
