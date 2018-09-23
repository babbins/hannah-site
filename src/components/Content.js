import React from 'react'
import PropTypes from 'prop-types'

function createMarkup(html) { return {__html: html}; };

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

const Content = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={createMarkup(content)}></div>
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content
