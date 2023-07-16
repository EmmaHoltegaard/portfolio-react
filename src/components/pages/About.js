import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { SectionFooter, SectionWrapperAbout } from 'components/GlobalStyles'
import { LanguageSwitcher } from 'components/LanguageSwitcher'

export const About = () => {
  const { t } = useTranslation()
  return (
    <SectionWrapperAbout>
      <SectionMain>
        <p>{t('about.intro')}</p>
        <p>{t('about.description')}</p>
      </SectionMain>
      <SectionFooter>
        <LanguageSwitcher />
      </SectionFooter>
    </SectionWrapperAbout>

  )
}

export const SectionMain = styled.div`
  border: yellow 2px dotted;
  width: 80%; // width numbers are guestimates atm.
  min-width: 500;
  max-width: 700px;
  margin: auto;
  overflow-y: auto;
  p {
    margin-bottom: 50px;
  }
`