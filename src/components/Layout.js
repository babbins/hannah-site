import React from 'react'
import Helmet from 'react-helmet'
import './all.sass'
import favicon from '../../static/img/favicon.ico'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Hannah Frishberg"
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
    ]}/>
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
