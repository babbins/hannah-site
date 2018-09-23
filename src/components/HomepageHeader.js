import React from 'react'
import styled from 'styled-components';
import Content from './Content';
import { colors } from '../theme'

const HeaderContainer = styled.div`
  background-color: ${colors.darkblue};
  color: white;
  font-family: Helvetica, sans-serif;
`

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 85%;
  margin: 0 auto;
  padding: 20% 0;
  font-size: 1.125em;
`

const Title = styled.div`
  margin: 5%;
  font-size: 2em;
`;

const FirstName = styled.span``

const LastName = styled.span``

const HeaderImage = styled.img`
  display: block;
  width: 100px;
`

const SocialLinks = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  & a {
    color: white;
    font-style: italic;
    border-bottom: 1px gray solid;
    display: inline-block;
  }
  & a:hover {
    text-decoration: none;
    border-bottom: 1px white solid;
  }
`

const SocialLink = styled.div``;

export const HomepageHeader = ({
  firstName,
  lastName,
  image,
  html,
  atSvg,
  instagramSvg,
  twitterSvg,
}) => (
  <HeaderContainer>
    <HeaderWrapper>
      <HeaderImage src={image} alt={`${firstName} ${lastName}`} />
      <Title>
        <span>{firstName} {lastName}</span>
      </Title>
      <Content content={html} />
      <SocialLinks>
        <SocialLink>
          <img src={atSvg} />
          <a href="mailto:hfrishberg@gmail.com">hfrishberg@gmail.com</a>
        </SocialLink>
        <SocialLink>
          <img src={instagramSvg} />
          <a href="https://www.instagram.com/hanfrish/">@hanfrish</a>
        </SocialLink>
        <SocialLink>
          <img src={twitterSvg} />
          <a href="https://twitter.com/hfrishberg">@hfrishberg</a>
        </SocialLink>
        
        
      </SocialLinks>
    </HeaderWrapper>
  </HeaderContainer>
)


export default HomepageHeader;
