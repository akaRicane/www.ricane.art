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
  switch (variant) {
    case PageSectionVariants.FULL_SCREEN:
      return <section className="page-section-common page-section-full-screen">{children}</section>

    default:
      return <section className="page-section-common">{children}</section>
  }
}

export default PageSection
export { PageSectionVariants }
