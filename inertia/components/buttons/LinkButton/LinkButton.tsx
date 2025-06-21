import { Link } from '@inertiajs/react'
import clsx from 'clsx'
import IconProvider, { IconProviderList } from '~/components/icons/IconProvider/IconProvider'
import { OpenInNewTab } from '~/globals/enums'
import './LinkButton.css'

type LinkButtonProps = {
  url: string
  is_external?: boolean
  label: string
  tag?: IconProviderList
  hide_icon?: boolean
  span_col?: number
  span_row?: number
}

const LinkButton: React.FC<LinkButtonProps> = ({
  url,
  is_external,
  label,
  tag,
  hide_icon,
  span_col,
  span_row,
}) => {
  const spanCol: string = span_col ? 'bento-span-col-' + span_col : 'bento-span-col-1'
  const spanRow: string = span_row ? 'bento-span-row-' + span_row : 'bento-span-row-1'

  const cln: string = clsx('link-button', spanCol, spanRow)

  const insertIcon = () => {
    if (hide_icon) return <></>
    // <img className="link-button-icon" />
    return (
      <IconProvider
        tag={tag || IconProviderList.MISSING}
        size="5rem"
        color="var(--color-black)"
        className="link-button-icon"
      />
    )
  }

  const insertText = () => {
    return (
      <p
        className={clsx(
          'link-button-label',
          !span_col || span_col < 2 ? 'link-button-label-hidden' : 'link-button-label-visible'
        )}
      >
        {label}
      </p>
    )
  }

  return (
    <>
      {is_external ? (
        <a href={url} target={OpenInNewTab.YES} className={cln}>
          {insertIcon()}
          {insertText()}
        </a>
      ) : (
        <Link href={url} className={cln}>
          {insertIcon()}
          {insertText()}
        </Link>
      )}
    </>
  )
}

export default LinkButton
