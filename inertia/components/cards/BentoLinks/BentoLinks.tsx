import LinkButton from '~/components/buttons/LinkButton/LinkButton'
import { IconProviderList } from '~/components/icons/IconProvider/IconProvider'
import { ALL_LINKS } from '~/globals/constants'
import './BentoLinks.css'

const BentoLinks: React.FC = () => {
  return (
    <div className="bento-links">
      <LinkButton url="/" label="music" tag={IconProviderList.MUSIC} span_col={2} />
      <LinkButton
        url={ALL_LINKS.spotify}
        is_external={true}
        label="spotify"
        tag={IconProviderList.SPOTIFY}
      />
      <LinkButton
        url={ALL_LINKS.apple_music}
        is_external={true}
        label="apple music"
        tag={IconProviderList.APPLE_MUSIC}
      />
      <LinkButton url="/" label="software" tag={IconProviderList.SOFTWARE} span_col={2} />
      <LinkButton url="/" label="creative" tag={IconProviderList.CREATIVE} span_col={2} />
      <LinkButton
        url={ALL_LINKS.soundcloud}
        is_external={true}
        label="soundcloud"
        tag={IconProviderList.SOUNDCLOUD}
      />
      <LinkButton
        url={ALL_LINKS.instagram}
        is_external={true}
        label="instagram"
        tag={IconProviderList.INSTAGRAM}
      />
      <LinkButton
        url={ALL_LINKS.github}
        is_external={true}
        label="github"
        tag={IconProviderList.GITHUB}
      />
      <LinkButton
        url={ALL_LINKS.linkedin}
        is_external={true}
        label="linkedin"
        tag={IconProviderList.LINKEDIN}
      />
      <LinkButton
        url={ALL_LINKS.dm_insta}
        is_external={true}
        label="dm instagram"
        tag={IconProviderList.DM_INSTAGRAM}
        span_col={3}
      />
    </div>
  )
}

export default BentoLinks
