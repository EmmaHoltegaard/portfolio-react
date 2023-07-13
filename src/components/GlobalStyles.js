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

// Tab + section - No longer in use
// export const PageInnerContainer = styled.section`
// height: 100%;
// display: flex;
// flex-direction: row-reverse;
// /* border: green dotted 3px; */
// `

// NavTabs

const NavTab = styled.nav`
  /* border: blue 2px solid; */
  height: 100%;
  cursor: pointer;
  writing-mode: vertical-rl;
  text-orientation: mixed;
//  text-orientation: upright;
  padding-top: 75px;
  min-width: 40px;
  display: flex;
  align-items: center;
  /* box-shadow: 5px 0 10px 0px grey; */
`

export const NavTabText = styled.p`
  font-weight: 700;
  font-family: monospace;
  font-size: 1.2rem;
  /* border: blue 1px dotted; */
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

export const SectionWrapper = styled.div`
  /* border: purple 2px dotted; */
  height: 100%;
  width: 100%;
`
