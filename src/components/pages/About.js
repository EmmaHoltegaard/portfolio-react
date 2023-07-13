import React from 'react'
import styled from 'styled-components'
import { SectionWrapper } from 'components/GlobalStyles'

export const About = () => {
  return (
    <AboutSection>
      <p>About me</p>
    </AboutSection>
  )
}

const AboutSection = styled(SectionWrapper)`
  background: lightblue;
 `