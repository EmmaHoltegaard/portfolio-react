import React from 'react'
// import styled from 'styled-components'
import { SectionWrapper } from 'components/GlobalStyles'
import { Skills } from './Skills'
import { Tech } from './Tech'

export const SkillsAndTech = () => {
  return (
    <SectionWrapper>
      <Tech />
      <Skills />
    </SectionWrapper>
  )
}

// const SkillsAndTechSection = styled(SectionWrapper)`
//  background: pink;
// `