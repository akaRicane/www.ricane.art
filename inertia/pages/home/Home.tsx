import NavigationsController from '#controllers/navigations_controller'
import { InferPageProps } from '@adonisjs/inertia/types'
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

      <PageSection variant={PageSectionVariants.FIT}>
        <Title title_transform={TitleTransform.UPPERCASE}>Multimodal artist & ENGineer</Title>
        <Title title_level={TitleLevels.H3} title_transform={TitleTransform.LOWERCASE}>
          across music, stage design and tech
        </Title>
      </PageSection>

      <PageSection>
        <LoremIpsum length={0} />
      </PageSection>

      <PageSection>
        <LoremIpsum length={0} />
        <LoremIpsum length={0} />
        <LoremIpsum length={0} />
      </PageSection>
    </PageContainer>
  )
}

export default Home
