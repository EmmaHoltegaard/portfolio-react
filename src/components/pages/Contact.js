import React from 'react'
import styled from 'styled-components'
import { SectionFooter, SectionWrapperContact } from 'components/GlobalStyles'
import { LanguageSwitcher } from 'components/LanguageSwitcher'

export const Contact = () => {
  return (
    <SectionWrapperContact>
      <SectionMain>
        <p>This section will have contact info + a contact form</p>
      </SectionMain>
      <SectionFooter>
        <LanguageSwitcher />
      </SectionFooter>
    </SectionWrapperContact>
  )
}

// const ContactSection = styled(SectionWrapper)`
//  background: yellow;
// `

export const SectionMain = styled.div`
  border: yellow 2px dotted;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  // Define width%, max + min.
`