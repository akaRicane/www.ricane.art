import BentoLinks from '~/components/cards/BentoLinks/BentoLinks'
import ContactForm from '~/components/cards/ContactForm/ContactForm'
import { SectionNames } from '~/components/layouts/PageSection/PageSection'
import './ContactCard.css'

type ContactCardProps = {
  scrollToSection: (sectionId: SectionNames) => void
}

const ContactCard: React.FC<ContactCardProps> = (props) => {
  return (
    <div className="contact-card">
      <div className="contact-card-content">
        <ContactForm />
        <BentoLinks />
      </div>
      <div className="contact-card-footer">
        all right reserved
        <div>
          <button onClick={() => props.scrollToSection(SectionNames.INTRO)}>back to top</button>
        </div>
      </div>
    </div>
  )
}

export default ContactCard
