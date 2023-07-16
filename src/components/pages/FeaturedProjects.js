import React from 'react'
import styled from 'styled-components'
import { SectionFooter, SectionWrapperFeaturedProjects } from 'components/GlobalStyles'
import { LanguageSwitcher } from 'components/LanguageSwitcher'

export const FeaturedProjects = () => {
  return (
    <SectionWrapperFeaturedProjects>
      <SectionMain>
        <p>These are my featured projects</p>
      </SectionMain>
      <SectionFooter>
        <LanguageSwitcher />
      </SectionFooter>
    </SectionWrapperFeaturedProjects>
  )
}

// const FeaturedProjectsSection = styled(SectionWrapper)`
//  background: orange;
// `

export const SectionMain = styled.div`
  border: yellow 2px dotted;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  // Define width%, max + min.
`