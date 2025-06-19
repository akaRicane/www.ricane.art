import clsx from 'clsx'
import './PageSection.css'

enum PageSectionVariants {
  FULL_SCREEN = 'full-screen',
  FIT = 'fit',
}

type PageSectionProps = {
  children: React.ReactNode
  variant?: PageSectionVariants
}

const PageSection: React.FC<PageSectionProps> = ({ children, variant }) => {
  const cln = clsx('page-section-common')

  switch (variant) {
    case PageSectionVariants.FULL_SCREEN:
      return <section className={clsx(cln, 'page-section-full-screen')}>{children}</section>

    default:
      return <section className={clsx(cln)}>{children}</section>
  }
}

export default PageSection
export { PageSectionVariants }
