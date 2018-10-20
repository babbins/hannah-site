import React from 'react'
import { colors } from '../theme'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

const Wrapper = styled.div`
  width: 85%;
  max-width: 960px;
  padding: 30px 0 70px 0;
  margin: 0 auto;
  color: ${colors.gray};
  font-family: Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  & p {
    margin: 10px 0;
    font-size: 1.125em;
    text-align: left;
    align-self: start;
  }
  & a {
    color: inherit;
    font-weight: bold;
    text-decoration: none;
  }
  & a:hover {
    border-bottom: 1px ${colors.gray} solid;
  }
  & h1 {
    font-size: 1.5em;
    top: -7px;
    margin: 20px 0;
  }
`
const Background = styled.div`
  background-color: ${colors.lightblue};
`

const SelectedWorks = ({ selectedWorks }) => (
  <Background>
    <Wrapper>
      <ReactMarkdown source={selectedWorks} />
    </Wrapper>
  </Background>
)

export default SelectedWorks;
