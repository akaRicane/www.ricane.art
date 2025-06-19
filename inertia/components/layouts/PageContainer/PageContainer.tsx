import { Head } from '@inertiajs/react'
import { Translations } from '~/types/app'
import './PageContainer.css'

type PageContainerProps = {
  children: React.ReactNode
  translations: Translations
  title?: string
  showHeader?: boolean
  showFooter?: boolean
  preloadQueries?: string[]
}

const PageContainer: React.FC<PageContainerProps> = (props) => {
  return (
    <>
      <Head title={props.title} />
      <div className="page-container">{props.children}</div>
    </>
  )
}

export default PageContainer
