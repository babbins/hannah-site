import React from 'react'
import styled from 'styled-components';
import Content from './Content';
import { colors } from '../theme'
import Email from './Email';
import Twitter from './Twitter';
import Instagram from './Instagram';

const HeaderContainer = styled.div`
  background-color: ${colors.darkblue};
  color: ${colors.lightgray};
  font-family: Helvetica, sans-serif;
`

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 85%;
  max-width: 725px;
  margin: 0 auto;
  padding: 5% 0 5% 0;
  font-size: 1.125em;
`

const Title = styled.div`
  font-size: 2em;
  text-align: center;
  margin-bottom: 15px;
`;

const FirstName = styled.span``

const LastName = styled.span``

const HeaderImage = styled.img`
  display: block;
  width: 100px;
`

const SocialLinks = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: space-around;
  width: 100%;
`

const SocialLink = styled.div`
  & a {
      color: ${colors.lightgray};
      font-style: italic;
      border-bottom: 1px transparent solid;
      display: inline-block;
    }
  & a:hover {
    text-decoration: none;
    border-bottom: 1px ${colors.lightgray} solid;
  }
  & svg {
    display: block;
    margin: 0 auto 5px auto;
    width: 20px;
  }
  & svg > path {
    fill: ${colors.lightgray};
  }
  @media(max-width: 769px) {
    & span {
      display: none;
    }
    & a, & a:hover {
      border-bottom: none;
    }
  }
`;

export const HomepageHeader = ({
  firstName,
  lastName,
  image,
  html,
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
        <a href="mailto:hfrishberg@gmail.com">
          <Email />
          <span>hfrishberg@gmail.com</span>
        </a>
        </SocialLink>
        <SocialLink>
        <a href="https://www.instagram.com/hanfrish/" target="_blank">
          <Instagram />
          <span>@hanfrish</span>
        </a>
        </SocialLink>
        <SocialLink>
          <a href="https://twitter.com/hanfrish" target="_blank">
            <Twitter />
            <span>@hanfrish</span>
          </a>
        </SocialLink>
      </SocialLinks>
    </HeaderWrapper>
  </HeaderContainer>
)


export default HomepageHeader;
