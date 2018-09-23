import React from 'react'
import { colors } from '../theme'
import styled from 'styled-components'
import Content from './Content'

const Wrapper = styled.div`
  background-color: ${colors.lightblue};
  color: ${colors.gray};
  font-family: Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledContent = styled(Content)`
  display: block;
`

const SelectedWorks = ({ selectedWorks }) => (
  <Wrapper>
    <StyledContent content={selectedWorks} />
  </Wrapper>
)

export default SelectedWorks;