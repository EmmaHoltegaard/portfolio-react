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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

// Add section backgrounds here, like I did for navtabs.
export const SectionWrapperAbout = styled(SectionWrapper)`
  background: lightblue;
`
export const SectionWrapperContact = styled(SectionWrapper)`
  background: yellow;
`
export const SectionWrapperFeaturedProjects = styled(SectionWrapper)`
  background: orange;
`
export const SectionWrapperSkillsAndTech = styled(SectionWrapper)`
  background: pink;
`

export const SectionFooter = styled.div`
  /* border: pink 3px dotted; */
  position: fixed;
  bottom: 0;
  `
// I'm unsure wether I want position: fixed, og nothing.
// With fixed, the content of SecionMain continues down to the bottom of
// the viewport, behind the footer.
// Without the footer takes up space as a normal footer, leaving less space for the MainSection.
