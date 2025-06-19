import clsx from 'clsx'
import './Title.css'

enum TitleLevels {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
}

enum TitleTransform {
  NONE = 'none',
  UPPERCASE = 'title-force-uppercase',
  LOWERCASE = 'title-force-lowercase',
}

type TitleProps = {
  children: React.ReactNode
  title_level?: TitleLevels
  title_transform?: TitleTransform
}

const Title: React.FC<TitleProps> = ({ children, title_level, title_transform }) => {
  const textTransform: string = title_transform || TitleTransform.NONE
  const cln = clsx('title-common', textTransform)

  switch (title_level) {
    case TitleLevels.H1:
      return <h1 className={clsx(cln, 'title-h1')}>{children}</h1>

    case TitleLevels.H3:
      return <h3 className={clsx(cln, 'title-h3')}>{children}</h3>

    case TitleLevels.H2:
    default:
      return <h2 className={clsx(cln, 'title-h2')}>{children}</h2>
  }
}

export default Title
export { TitleLevels, TitleTransform }
