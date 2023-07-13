import React from 'react'
import styled from 'styled-components'
import { SectionWrapper } from 'components/GlobalStyles'
import { Skills } from './Skills'
import { Tech } from './Tech'

export const SkillsAndTech = () => {
  return (
    <SkillsAndTechSection>
      <Tech />
      <Skills />
    </SkillsAndTechSection>
  )
}

const SkillsAndTechSection = styled(SectionWrapper)`
 background: pink;
`