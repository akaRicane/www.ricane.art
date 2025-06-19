import NavigationsController from '#controllers/navigations_controller'
import { InferPageProps } from '@adonisjs/inertia/types'
import BioCard, { BioCardContentFormat } from '~/components/cards/BioCard/BioCard'
import PageContainer from '~/components/layouts/PageContainer/PageContainer'
import PageSection, { PageSectionVariants } from '~/components/layouts/PageSection/PageSection'
import LoremIpsum from '~/components/texts/LoremIpsum/LoremIpsum'
import RolloverText from '~/components/texts/RolloverText/RolloverText'
import Title, { TitleLevels, TitleTransform } from '~/components/texts/Title/Title'

const Home: React.FC<InferPageProps<NavigationsController, 'home'>> = (props) => {
  return (
    <PageContainer title="ricane.art/homepage" {...props}>
      <PageSection variant={PageSectionVariants.FULL_SCREEN}>
        <Title title_transform={TitleTransform.NONE}>
          <RolloverText
            chunks={[
              { text: ['hi', 'salut', 'hello there'], endWith: ', ', timing: 7 },
              { text: ['i am', "moi c'est"], endWith: ' ', timing: 11 },
              { text: ['philippe', 'ricane', 'akaRicane'], endWith: ', ', timing: 13 },
              { text: ['developer', 'sound engineer'], endWith: '.', timing: 3 },
            ]}
          />
        </Title>

        <Title title_level={TitleLevels.H3} title_transform={TitleTransform.LOWERCASE}>
          i tend to do a lot of stuff, check this out
        </Title>
      </PageSection>

      <PageSection>
        <Title title_transform={TitleTransform.UPPERCASE}>Multimodal artist & ENGineer</Title>
        <Title title_level={TitleLevels.H3} title_transform={TitleTransform.LOWERCASE}>
          across music, stage design and tech
        </Title>
      </PageSection>

      <PageSection>
        <BioCard
          title="About me"
          childrenCards={[
            {
              content_format: BioCardContentFormat.ME,
              name: 'Philippe',
              birth_year: 1995,
              birth_coordinates: "N 47° 14' 50.857'' W 0° 3' 36.274''",
              current_location: { city: 'Marseille', country: 'France' },
            },
          ]}
        />

        <BioCard
          title="I've studied that"
          childrenCards={[
            {
              content_format: BioCardContentFormat.JOB,
              what: 'Engineering degree',
              topics: ['vibrations', 'acoustics'],
              where: { city: 'ENSIM, Le Mans', country: 'France' },
              when: [2013, 2018],
            },
          ]}
        />

        <BioCard
          title="I've worked there"
          childrenCards={[
            {
              content_format: BioCardContentFormat.JOB,
              what: 'Spell Audio',
              topics: ['sound system', 'P.A. design'],
              where: { city: 'Le Mans', country: 'France' },
              when: [2018],
            },
            {
              content_format: BioCardContentFormat.JOB,
              what: 'Funky Sound Studio - Debussy Audio',
              topics: ['high-end headphones audio engineering'],
              where: { city: 'Paris', country: 'France' },
              when: [2019],
            },
            {
              content_format: BioCardContentFormat.JOB,
              what: 'Spell Audio',
              topics: ['audio engineer', 'project lead', 'manager'],
              where: { city: 'Boulogne-Billancourt', country: 'France' },
              when: [2020, 2024],
            },
          ]}
        />

        <BioCard
          title="Geeking this"
          childrenCards={[
            {
              content_format: BioCardContentFormat.TOPIC,
              what: 'Performing music',
              topics: ['drums', 'percussions', 'bass guitar', 'piano & keys'],
              when: [2002],
            },
            {
              content_format: BioCardContentFormat.TOPIC,
              what: 'Producing music',
              topics: ['recording', 'mixing', 'mastering'],
              when: [2013],
            },
            {
              content_format: BioCardContentFormat.TOPIC,
              what: 'Sciences programming',
              topics: ['sciences', 'signal processing', 'robotics'],
              when: [2015],
            },
            {
              content_format: BioCardContentFormat.TOPIC,
              what: 'Event production',
              topics: ['concerts & parties production'],
              when: [2016],
            },
            {
              content_format: BioCardContentFormat.TOPIC,
              what: 'Software programming',
              topics: ['desktop applications', 'websites'],
              when: [2020],
            },
            {
              content_format: BioCardContentFormat.TOPIC,
              what: 'Stage design',
              topics: ['vj', 'lightshow', 'custom led fixtures'],
              when: [2022],
            },
            {
              content_format: BioCardContentFormat.TOPIC,
              what: 'Web infrastructure',
              topics: ['website hosting', 'docker'],
              when: [2024],
            },
          ]}
        />
      </PageSection>

      <PageSection>
        <LoremIpsum />
        <LoremIpsum />
        <LoremIpsum />
      </PageSection>
    </PageContainer>
  )
}

export default Home
