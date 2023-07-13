import React from 'react'
import styled from 'styled-components'
import { SectionWrapper } from 'components/GlobalStyles'

export const FeaturedProjects = () => {
  return (
    <FeaturedProjectsSection>
      <p>These are my featured projects</p>
    </FeaturedProjectsSection>
  )
}

const FeaturedProjectsSection = styled(SectionWrapper)`
 background: orange;
`