import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    // lng: 'en',
    fallBackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        translation: {
          about: {
            intro_1: 'Frontend developer',
            intro_2: '+ language and media educator',
            description: 'Im a front-end developer with a strong visual sensibility and a keen interest in the user. I love to create fun, functional and user-friendly applications and websites, with great attention to detail. Along with coding skills, I also have years of experience teaching English and Media Studies. This makes me particularly skilled at not only communication and collaboration, but also taking complex systems and and concepts, breaking them down, and making them accessible in new ways.'
          },
          contact: {},
          featured_projects: {},
          skills_and_tech: {},
          skills: {},
          tech: {},
          navigation: {
            tab_1: 'ABOUT ME',
            tab_2: 'SKILLS & TECH',
            tab_3: 'FEATURED PROJECTS',
            tab_4: 'CONTACT'
          }
        }
      },
      da: {
        translation: {
          about: {
            intro_1: 'Frontend udvikler',
            intro_2: '+ underviser',
            description: 'Im a front-end developer with a strong visual sensibility and a keen interest in the user. I love to create fun, functional and user-friendly applications and websites, with great attention to detail. Along with coding skills, I also have years of experience teaching English and Media Studies. This makes me particularly skilled at not only communication and collaboration, but also taking complex systems and and concepts, breaking them down, and making them accessible in new ways.'
          },
          contact: {},
          featured_projects: {},
          skills_and_tech: {},
          skills: {},
          tech: {},
          navigation: {
            tab_1: 'OM MIG',
            tab_2: 'FÆRDIGHEDER & TECH',
            tab_3: 'UDVALGTE PROJEKTER',
            tab_4: 'KONTAKT'
          }
        }
      }
    }
  })