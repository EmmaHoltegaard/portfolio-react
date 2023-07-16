import React from 'react'
import styled from 'styled-components'
import { SectionFooter, SectionWrapperSkillsAndTech } from 'components/GlobalStyles'
import { LanguageSwitcher } from 'components/LanguageSwitcher'
import { Skills } from './Skills'
import { Tech } from './Tech'

export const SkillsAndTech = () => {
  return (
    <SectionWrapperSkillsAndTech>
      <SectionMain>
        <Tech />
        <Skills />
      </SectionMain>
      <SectionFooter>
        <LanguageSwitcher />
      </SectionFooter>
    </SectionWrapperSkillsAndTech>
  )
}

// const SkillsAndTechSection = styled(SectionWrapper)`
//  background: pink;
// `

export const SectionMain = styled.div`
  border: yellow 2px dotted;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  // Define width%, max + min.
`
