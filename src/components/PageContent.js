import React from 'react'
import { useTranslation } from 'react-i18next'
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

  // Access translations
  const { t } = useTranslation()

  // Function that sets the active page id on click
  const handleTabClick = (pageId) => {
    dispatch(ui.actions.setPageId(pageId))
  }

  return (
    <PageContainer>
      {activePageId === 'about' && <About />}
      <AboutNavTab onClick={() => handleTabClick('about')}>
        <NavTabText>{t('navigation.tab_1')}</NavTabText>
      </AboutNavTab>

      {activePageId === 'skillsTech' && (<SkillsAndTech />)}
      <SkillsAndTechNavTab onClick={() => handleTabClick('skillsTech')}>
        <NavTabText>{t('navigation.tab_2')}</NavTabText>
      </SkillsAndTechNavTab>

      {activePageId === 'featuredProjects' && <FeaturedProjects />}
      <FeaturedProjectsNavTab onClick={() => handleTabClick('featuredProjects')}>
        <NavTabText>{t('navigation.tab_3')}</NavTabText>
      </FeaturedProjectsNavTab>

      {activePageId === 'contact' && <Contact />}
      <ContactNavTab onClick={() => handleTabClick('contact')}>
        <NavTabText>{t('navigation.tab_4')}</NavTabText>
      </ContactNavTab>

    </PageContainer>
  )
}
