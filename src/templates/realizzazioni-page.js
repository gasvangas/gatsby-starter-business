import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import RealizzazioniPageTemplate from '../components/RealizzazioniPageTemplate'
import Layout from '../components/Layout'

const RealizzazioniPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.meta_title}</title>
        <meta name='description' content={post.frontmatter.meta_description} />
      </Helmet>
      <RealizzazioniPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        content={post.html}
      />
    </Layout>
  )
}

RealizzazioniPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default RealizzazioniPage

export const realizzazioniPageQuery = graphql`
  query RealizzazioniPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        meta_title
        meta_description
      }
    }
  }
`
