import BentoLinks from '~/components/cards/BentoLinks/BentoLinks'
import ContactForm from '~/components/cards/ContactForm/ContactForm'
import './ContactCard.css'

const ContactCard: React.FC = () => {
  return (
    <div className="contact-card">
      <div className="contact-card-content">
        <ContactForm />
        <BentoLinks />
      </div>
      <div className="contact-card-footer">all right reserved</div>
    </div>
  )
}

export default ContactCard
