import React from 'react'
import { Layout, Social } from '../../components'
import { contactData } from '../../data'
import './styles.scss'

const ContactPage = () => {
  const { email, phone } = contactData

  return (
    <Layout constrained>
      <div className='text text--spaced'>
        <span>{phone.label}: </span>
        <a href={`tel:${phone.value}`} className='text'>
          {phone.valueFormatted}
        </a>
      </div>
      <div className='text text--spaced'>
        <span>{email.label}: </span>
        <a href={`mailto:${email.value}`} className='text'>
          {email.value}
        </a>
      </div>
      <Social dark />
    </Layout>
  )
}

export default ContactPage
