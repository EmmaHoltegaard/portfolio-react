import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { SkillsAndTech } from './pages/SkillsAndTech'
import { FeaturedProjects } from './pages/FeaturedProjects'
import { ui } from '../reducers/ui'
import { PageContainer, NavTabText, AboutNavTab, ContactNavTab, SkillsAndTechNavTab, FeaturedProjectsNavTab } from './GlobalStyles'

export const PageContent = () => {
  const activePageId = useSelector((state) => state.ui.activePageId)
  const dispatch = useDispatch()

  // Function that sets the active page id on click
  const handleTabClick = (pageId) => {
    dispatch(ui.actions.setPageId(pageId))
  }

  return (
    <PageContainer>
      {activePageId === 'about' && <About />}
      <AboutNavTab onClick={() => handleTabClick('about')}>
        <NavTabText>ABOUT</NavTabText>
      </AboutNavTab>

      {activePageId === 'skillsTech' && (<SkillsAndTech />)}
      <SkillsAndTechNavTab onClick={() => handleTabClick('skillsTech')}>
        <NavTabText>SKILLS & TECH</NavTabText>
      </SkillsAndTechNavTab>

      {activePageId === 'featuredProjects' && <FeaturedProjects />}
      <FeaturedProjectsNavTab onClick={() => handleTabClick('featuredProjects')}>
        <NavTabText>FEATURED PROJECTS</NavTabText>
      </FeaturedProjectsNavTab>

      {activePageId === 'contact' && <Contact />}
      <ContactNavTab onClick={() => handleTabClick('contact')}>
        <NavTabText>CONTACT</NavTabText>
      </ContactNavTab>

    </PageContainer>
  )
}
