import React from 'react'
import styled from 'styled-components/macro'
import { useTranslation } from 'react-i18next'

const lngs = {
  en: { nativeName: 'EN' },
  da: { nativeName: 'DA' }
}

export const LanguageSwitcher = () => {
  // Access the i18n object via the useTranslation hook(recommended method, rather than importing)
  const { i18n } = useTranslation()

  return (
    <LngSwitchWrapper>
      {Object.keys(lngs).map((lng, index) => (
        <React.Fragment key={lng}>
          {index > 0 && <span>/</span>}
          <LngSwitchButton
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
            style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}>
            {lngs[lng].nativeName}
          </LngSwitchButton>
        </React.Fragment>
      ))}
    </LngSwitchWrapper>
  )
}

const LngSwitchButton = styled.button`
  background: transparent;
  border: none;
  font-size: 0.8rem;
  font-family: 'Libre Franklin', sans-serif;
`

const LngSwitchWrapper = styled.div`
  margin: 10px auto 20px 15px;
`