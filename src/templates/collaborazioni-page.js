import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import CollaborazioniPageTemplate from '../components/CollaborazioniPageTemplate'
import Layout from '../components/Layout'

const CollaborazioniPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.meta_title}</title>
        <meta name='description' content={post.frontmatter.meta_description} />
      </Helmet>
      <CollaborazioniPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

CollaborazioniPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CollaborazioniPage

export const collaborazioniPageQuery = graphql`
  query CollaborazioniPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        meta_title
        meta_description
      }
    }
  }
`
