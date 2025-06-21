import clsx from 'clsx'
import './PageSection.css'

enum PageSectionVariants {
  FULL_SCREEN = 'full-screen',
  FIT = 'fit',
}

type PageSectionProps = {
  children: React.ReactNode
  variant?: PageSectionVariants
  background_color?: string
}

const PageSection: React.FC<PageSectionProps> = ({ children, variant, background_color }) => {
  const backgroundColor: string = 'var(' + (background_color || '--color-main-dark') + ')'

  const cln = clsx('page-section-common')
  const stl = { backgroundColor: backgroundColor }

  switch (variant) {
    case PageSectionVariants.FULL_SCREEN:
      return (
        <section style={stl} className={clsx(cln, 'page-section-full-screen')}>
          {children}
        </section>
      )

    default:
      return (
        <section style={stl} className={clsx(cln)}>
          {children}
        </section>
      )
  }
}

export default PageSection
export { PageSectionVariants }
