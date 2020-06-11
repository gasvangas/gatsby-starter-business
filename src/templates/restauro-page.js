import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import RestauroPageTemplate from '../components/RestauroPageTemplate'
import Layout from '../components/Layout'

const RestauroPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.meta_title}</title>
        <meta name='description' content={post.frontmatter.meta_description} />
      </Helmet>
      <RestauroPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        content={post.html}
      />
    </Layout>
  )
}

RestauroPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default RestauroPage

export const restauroPageQuery = graphql`
  query RestauroPage($id: String!) {
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