import React from 'react'
import Helmet from 'react-helmet'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Hannah Frishberg" />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
