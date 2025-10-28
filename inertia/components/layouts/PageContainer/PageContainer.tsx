import { Head } from '@inertiajs/react'
import { Translations } from '~/types/app'
import './PageContainer.css'
import clsx from 'clsx'

type PageContainerProps = {
  children: React.ReactNode
  translations: Translations
  title?: string
  showHeader?: boolean
  showFooter?: boolean
  smoothScroll?: boolean
  preloadQueries?: string[]
}

const PageContainer: React.FC<PageContainerProps> = (props) => {
  const cln: string = clsx('page-container', props.smoothScroll ? 'page-smooth-scroll' : null)

  return (
    <>
      <Head title={props.title} />
      <div className={cln}>{props.children}</div>
    </>
  )
}

export default PageContainer
