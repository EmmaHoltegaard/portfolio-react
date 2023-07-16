import React from 'react'
import styled from 'styled-components/macro'
import { useTranslation } from 'react-i18next'
import { SectionFooter, SectionWrapperAbout } from 'components/GlobalStyles'
import { LanguageSwitcher } from 'components/LanguageSwitcher'

export const About = () => {
  const { t } = useTranslation()
  return (
    <SectionWrapperAbout>
      <SectionMain>
        <TopWrapper>
          <ImageWrapper>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.petpaw.com.au%2Fwp-content%2Fuploads%2F2015%2F08%2FBlack-cavalier-king-charles-spaniel-1500x1353.jpg&f=1&nofb=1&ipt=597976eeab28852dd4dea1a227dbb8aa9af71ba77982c9090a6f5a0203ced3c7&ipo=images" alt="filler" />
          </ImageWrapper>
          <TextWrapper>
            <h1>Emma Holtegaard</h1>
            <h2>{t('about.intro_1')}</h2>
            <h3>{t('about.intro_2')}</h3>
          </TextWrapper>
        </TopWrapper>
        <Description>{t('about.description')}</Description>
      </SectionMain>
      <SectionFooter>
        <LanguageSwitcher />
      </SectionFooter>
    </SectionWrapperAbout>

  )
}

const SectionMain = styled.div`
//  border: orange 2px dotted;
  width: 550px;
  padding: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  margin: auto;
`

const ImageWrapper = styled.div`
  background-color: bisque;
  width: 165px;
  height: 165px;
  border-radius: 100px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100px;
  }
`

const TopWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin: 0 0 20px 0;
`

const TextWrapper = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: flex-end;

  h1 {
      font-family: 'Libre Franklin', sans-serif;
      font-weight: 400;
      margin-bottom: 15px;
      font-size: 1.4rem;
    }

    h2 {
      font-family: 'Libre Franklin', sans-serif;
      font-weight: 400;
      font-size: 2.2rem;
  //    border: pink dotted 1px;
      margin-bottom: 5px;
    }

    h3 {
      font-family: 'Libre Franklin', sans-serif;
      color: darkgrey;
      font-weight: 400;
      font-size: 0.8;
  //    border: pink dotted 1px;
      margin-bottom: 20px;
    }
`

const Description = styled.p`
    font-family: 'GT-super-text', serif;
    font-size: 1rem;
    line-height: 1.4rem;
    text-align: justify;
//    border: pink dotted 1px;
`