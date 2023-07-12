import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { SkillsAndTech } from './pages/SkillsAndTech'
import { FeaturedProjects } from './pages/FeaturedProjects'
import { ui } from '../reducers/ui'
import { PageContainer, AboutNavTab, ContactNavTab, SkillsAndTechNavTab, FeaturedProjectsNavTab, PageInnerContainer } from './GlobalStyles'

export const PageContent = () => {
  const activePageId = useSelector((state) => state.ui.activePageId)
  const dispatch = useDispatch()

  // Function that sets the active page id on click
  const handleTabClick = (pageId) => {
    dispatch(ui.actions.setPageId(pageId))
  }

  return (
    <PageContainer>

      <PageInnerContainer>
        <AboutNavTab onClick={() => handleTabClick('about')}>
          About
        </AboutNavTab>
        {activePageId === 'about' && <About />}
      </PageInnerContainer>

      <PageInnerContainer>
        <SkillsAndTechNavTab onClick={() => handleTabClick('skillsTech')}>
          Skills & Tech
        </SkillsAndTechNavTab>
        {activePageId === 'skillsTech' && (
          <SkillsAndTech />
        )}
      </PageInnerContainer>

      <PageInnerContainer>
        <FeaturedProjectsNavTab onClick={() => handleTabClick('featuredProjects')}>
          Featured Projects
        </FeaturedProjectsNavTab>
        {activePageId === 'featuredProjects' && <FeaturedProjects />}
      </PageInnerContainer>

      <PageInnerContainer>
        <ContactNavTab onClick={() => handleTabClick('contact')}>
          Contact
        </ContactNavTab>
        {activePageId === 'contact' && <Contact />}
      </PageInnerContainer>

    </PageContainer>
  )
}
