import styled from 'styled-components/macro'

// Wraps the entire page
export const PageContainer = styled.main`
display: flex;
flex-direction: row;
height: 100vh;
width: 100vw;
justify-content: flex-end;
border: red solid 2px;
`

// Tab + section
export const PageInnerContainer = styled.section`
height: 100%;
display: flex;
flex-direction: row-reverse;
border: green dotted 3px;
flex-grow: 0;
flex-shrink: 0;
`

// NavTabs

const NavTab = styled.nav`
  /* border: blue 2px solid; */
  height: 100%;
  cursor: pointer;
  writing-mode: vertical-rl;
  /* text-orientation: mixed; */
  text-orientation: upright;
  text-align: center;
  width: 35px;
`

export const AboutNavTab = styled(NavTab)`
  background: lightblue;
`

export const SkillsAndTechNavTab = styled(NavTab)`
  background: pink;
`

export const FeaturedProjectsNavTab = styled(NavTab)`
  background: orange;
`

export const ContactNavTab = styled(NavTab)`
  background: yellow;
`

// Individual Sections, excl. tabs:

export const SectionWrapper = styled.section`
  border: purple 4px dotted;
  height: 100%;
  flex-grow: 1;
`
