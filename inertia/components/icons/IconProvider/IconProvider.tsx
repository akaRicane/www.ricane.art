import { IconContext } from 'react-icons/lib'
import { MdError, MdOutlineComputer } from 'react-icons/md'
import {
  SiApplemusic,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiMinutemailer,
  SiMusicbrainz,
  SiPenpot,
  SiSoundcloud,
  SiSpotify,
} from 'react-icons/si'
import './IconProvider.css'

enum IconProviderList {
  CUSTOM = 'custom',
  MISSING = 'missing',
  APPLE_MUSIC = 'apple_music',
  DM_INSTAGRAM = 'dm_instagram',
  GITHUB = 'github',
  INSTAGRAM = 'instagram',
  LINKEDIN = 'linkedin',
  SOUNDCLOUD = 'soundcloud',
  SPOTIFY = 'spotify',

  MUSIC = 'music',
  CREATIVE = 'creative',
  SOFTWARE = 'software',
}

type IconProviderProps = {
  tag: IconProviderList
} & IconContextProviderProps

type IconContextProviderProps = {
  color?: string
  size?: string
  className?: string
  title?: string
}

const IconProvider: React.FC<IconProviderProps> = ({ tag, color, size, className, title }) => {
  const providerValue: IconContextProviderProps = {
    color: color || undefined,
    size: size || '1rem',
    className: className || undefined,
    title: title || undefined,
  }

  const retrieveIcon = () => {
    switch (tag) {
      case IconProviderList.APPLE_MUSIC:
        return <SiApplemusic />

      case IconProviderList.GITHUB:
        return <SiGithub />

      case IconProviderList.INSTAGRAM:
        return <SiInstagram />

      case IconProviderList.LINKEDIN:
        return <SiLinkedin />

      case IconProviderList.SOUNDCLOUD:
        return <SiSoundcloud />

      case IconProviderList.SPOTIFY:
        return <SiSpotify />

      case IconProviderList.MUSIC:
        return <SiMusicbrainz />

      case IconProviderList.CREATIVE:
        return <SiPenpot />

      case IconProviderList.SOFTWARE:
        return <MdOutlineComputer />

      case IconProviderList.DM_INSTAGRAM:
        return <SiMinutemailer />

      default:
        return <MdError />
    }
  }

  return <IconContext.Provider value={providerValue}>{retrieveIcon()}</IconContext.Provider>
}

export default IconProvider
export { IconProviderList }
