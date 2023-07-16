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
            intro: 'This line will describe my prof title',
            description: 'This is my description...'
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
            intro: 'Min prof titler',
            description: 'En beskrivelse af min profil'
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