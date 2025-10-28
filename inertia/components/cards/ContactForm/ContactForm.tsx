import { useForm } from '@tanstack/react-form'
import './ContactForm.css'

const ContactForm: React.FC = () => {
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      topic: '',
      message: '',
    },
    onSubmit: ({ value }) => {
      // Do something with form data
      console.log('on form submit', value)
      // postRequestContactFormMail(value).then(() => {
      //   props.setPending(false)
      // })
    },
  })

  return (
    <div className="contact-form-wrapper">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          form.handleSubmit()
        }}
        className="contact-form"
      >
        <form.Field
          name="name"
          validators={{
            // We can choose between form-wide and field-specific validators
            onChange: ({ value }) => (typeof value === 'string' ? undefined : 'Must be a string'),
          }}
          children={(field) => (
            <>
              <input
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                type="text"
                placeholder="Name"
                className="contact-form-field"
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {!field.state.meta.isValid && <em>{field.state.meta.errors.join(',')}</em>}
            </>
          )}
        />
        <form.Field
          name="email"
          validators={{
            // We can choose between form-wide and field-specific validators
            onChange: ({ value }) => (typeof value === 'string' ? undefined : 'Must be an email'),
          }}
          children={(field) => (
            <>
              <input
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                type="email"
                placeholder="Email"
                className="contact-form-field"
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {!field.state.meta.isValid && <em>{field.state.meta.errors.join(',')}</em>}
            </>
          )}
        />
        <form.Field
          name="topic"
          validators={{
            // We can choose between form-wide and field-specific validators
            onChange: ({ value }) => (typeof value === 'string' ? undefined : 'Must be an email'),
          }}
          children={(field) => (
            <>
              <select
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                className="contact-form-field"
                onChange={(e) => field.handleChange(e.target.value)}
              >
                <option value="music">music</option>
                <option value="creative">creative</option>
                <option value="software">software</option>
                <option value="anything else">anything else</option>
              </select>
              {/* <input
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                type="text"
                placeholder="Email"
                className="contact-form-field"
                onChange={(e) => field.handleChange(e.target.value)}
              /> */}
              {!field.state.meta.isValid && <em>{field.state.meta.errors.join(',')}</em>}
            </>
          )}
        />
        <form.Field
          name="message"
          validators={{
            // We can choose between form-wide and field-specific validators
            onChange: ({ value }) => (typeof value === 'string' ? undefined : 'Must be a text'),
          }}
          children={(field) => (
            <>
              <textarea
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                placeholder="Message"
                className="contact-form-field contact-form-field-textarea"
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {!field.state.meta.isValid && <em>{field.state.meta.errors.join(',')}</em>}
            </>
          )}
        />
        <button type="submit" onClick={() => form.handleSubmit()} className="contact-form-submit">
          submit
        </button>
      </form>
    </div>
  )
}

export default ContactForm
