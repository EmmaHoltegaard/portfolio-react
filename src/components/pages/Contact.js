import React from 'react'
import styled from 'styled-components'
import { SectionWrapper } from 'components/GlobalStyles'

export const Contact = () => {
  return (
    <ContactSection>
      <p>This section will have contact info + a contact form</p>
    </ContactSection>
  )
}

const ContactSection = styled(SectionWrapper)`
 background: yellow;
`