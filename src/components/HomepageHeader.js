import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import HomepageHeader from '../components/HomepageHeader'

export const HomepageTemplate = ({data}) => {
  console.log(data);
  return (<div>homepage</div>);
}

const Homepage = ({ data }) => {
  return (
    <Layout>
      <HomepageTemplate
        data={data}
      />
    </Layout>
  )
}


export default Homepage

export const HomepageQuery = graphql`
  query Homepage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter{
        templateKey
        firstName
        lastName
      }
    }
  }
`
