import { useState } from 'react'
import { CircleCheck } from 'lucide-react'

import Button from '../common/Button'
import useModal from '../../hooks/useModal'

const inputClass =
  'w-full rounded-[14px] border bg-surface px-4 py-3 text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-brand'

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Please enter your name.'
  if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) errors.email = 'Please enter a valid email address.'
  if (!form.details.trim()) errors.details = 'Tell us a little about your project.'
  return errors
}

function Field({ id, label, error, children }) {
  return (
    <div className="grid gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
      </label>
      {children}
      {error && (
        <span id={`${id}-error`} className="text-sm text-red-500">
          {error}
        </span>
      )}
    </div>
  )
}

export default function QuoteModal({ productName, options = [] }) {
  const { closeModal } = useModal()
  const [form, setForm] = useState({ name: '', email: '', details: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formErrors = validate(form)
    setErrors(formErrors)
    if (Object.keys(formErrors).length > 0) return

    // TODO: send this to a real inbox (Formspree, EmailJS or our own API) before launch.
    // Right now the request never leaves the browser.
    console.log('Quote request:', { ...form, productName, options })
    setSubmitted(true)
  }

  // shared props for each input, so error styles and aria attributes stay consistent
  const fieldProps = (name) => ({
    id: `quote-${name}`,
    name,
    value: form[name],
    onChange: handleChange,
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `quote-${name}-error` : undefined,
    className: `${inputClass} ${errors[name] ? 'border-red-500' : 'border-line'}`,
  })

  if (submitted) {
    return (
      <div className="grid justify-items-start gap-3 py-4">
        <CircleCheck size={42} strokeWidth={1.6} className="text-blue-500" />
        <h2 className="text-3xl">Request received</h2>
        <p>
          Thanks, {form.name.trim()}. We’ll reply to {form.email.trim()} with next steps and a quote.
        </p>
        <Button onClick={closeModal} className="mt-2">
          Close
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-4">
      <div>
        <h2 className="pr-8 text-3xl sm:text-4xl">Start your project</h2>
        <p className="mt-2">Tell us what you want to make and we’ll reply with next steps and a quote.</p>
      </div>

      {productName && (
        <div className="rounded-[14px] border border-line bg-surface px-4 py-3 text-sm">
          <p>
            <span className="text-ink">Product:</span> {productName}
          </p>
          {options.length > 0 && (
            <p>
              <span className="text-ink">Customization:</span> {options.join(', ')}
            </p>
          )}
        </div>
      )}

      <Field id="quote-name" label="Your name" error={errors.name}>
        <input type="text" autoComplete="name" placeholder="Full name" {...fieldProps('name')} />
      </Field>

      <Field id="quote-email" label="Email address" error={errors.email}>
        <input type="email" autoComplete="email" placeholder="you@example.com" {...fieldProps('email')} />
      </Field>

      <Field id="quote-details" label="Project details" error={errors.details}>
        <textarea rows={4} placeholder="Describe your idea, size and quantity" {...fieldProps('details')} />
      </Field>

      <Button type="submit" variant="primary" className="mt-1 justify-self-start">
        Send request
      </Button>
    </form>
  )
}
