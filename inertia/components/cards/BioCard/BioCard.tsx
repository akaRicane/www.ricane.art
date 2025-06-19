import Title, { TitleLevels, TitleTransform } from '~/components/texts/Title/Title'
import { CityLocation, LongLatCoordinates } from '~/types/app'
import './BioCard.css'

enum BioCardContentFormat {
  ME = 'me',
  JOB = 'job',
  TOPIC = 'topic',
}

type BioCardProps = {
  title: string
  childrenCards: BioContentProps[]
}

type BioCardContentProps = {
  content: BioContentProps
}

type BioContentProps = {
  content_format: BioCardContentFormat
  name?: string
  birth_year?: number
  birth_coordinates?: LongLatCoordinates
  current_location?: CityLocation
  what?: string
  topics?: string[]
  when?: number[]
  where?: CityLocation
}

const BioCardContent: React.FC<BioCardContentProps> = ({ content }) => {
  switch (content.content_format) {
    case BioCardContentFormat.ME:
      return (
        <div className="bio-card-content">
          <div className="bio-card-content-line">
            <p className="bio-card-content-line-label">name</p>
            <p className="bio-card-content-line-data">{content.name}</p>
          </div>
          <div className="bio-card-content-line">
            <p className="bio-card-content-line-label">year of birth</p>
            <p className="bio-card-content-line-data">{content.birth_year}</p>
          </div>
          <div className="bio-card-content-line">
            <p className="bio-card-content-line-label">coordinates</p>
            <p className="bio-card-content-line-data">{content.birth_coordinates}</p>
          </div>
          <div className="bio-card-content-line">
            <p className="bio-card-content-line-label">currently in</p>
            <p className="bio-card-content-line-data">
              {content.current_location?.city}, {content.current_location?.country}
            </p>
          </div>
        </div>
      )

    case BioCardContentFormat.JOB:
      return (
        <div className="bio-card-content">
          <div className="bio-card-content-line">
            <p className="bio-card-content-line-label">what</p>
            <p className="bio-card-content-line-data">{content.what}</p>
          </div>
          <div className="bio-card-content-line">
            <p className="bio-card-content-line-label">topics</p>
            <p className="bio-card-content-line-data">{content.topics?.join(' | ')}</p>
          </div>
          <div className="bio-card-content-line">
            <p className="bio-card-content-line-label">where</p>
            <p className="bio-card-content-line-data">
              {content.where?.city}, {content.where?.country}
            </p>
          </div>
          <div className="bio-card-content-line">
            <p className="bio-card-content-line-label">when</p>
            {content.when?.at(1) ? (
              <p className="bio-card-content-line-data">
                [{content.when?.at(0)} - {content.when?.at(1)}]
              </p>
            ) : (
              <p className="bio-card-content-line-data">{content.when?.at(0)}</p>
            )}
          </div>
        </div>
      )

    case BioCardContentFormat.TOPIC:
    default:
      return (
        <div className="bio-card-content">
          <div className="bio-card-content-line">
            <p className="bio-card-content-line-label">what</p>
            <p className="bio-card-content-line-data">{content.what}</p>
          </div>
          <div className="bio-card-content-line">
            <p className="bio-card-content-line-label">topics</p>
            <p className="bio-card-content-line-data">{content.topics?.join(' | ')}</p>
          </div>
          <div className="bio-card-content-line">
            <p className="bio-card-content-line-label">since</p>
            <p className="bio-card-content-line-data">{content.when?.at(0)}</p>
          </div>
        </div>
      )
  }
}

const BioCard: React.FC<BioCardProps> = ({ title, childrenCards }) => {
  return (
    <div className="bio-card">
      <Title title_level={TitleLevels.H3} title_transform={TitleTransform.LOWERCASE}>
        {title}
      </Title>
      <div>
        {childrenCards.map((content, index) => (
          <BioCardContent key={index} content={content} />
        ))}
      </div>
    </div>
  )
}

export default BioCard
export { BioCardContentFormat }
