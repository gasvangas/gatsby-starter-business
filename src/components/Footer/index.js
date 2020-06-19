import React from 'react'
import config from '../../../config'
import { Link, graphql, StaticQuery } from 'gatsby'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='content has-text-centered'>
          <p>
            <strong>{config.copyright}</strong>
          </p>
        </div>
        <br />
      <div className='content has-text-centered'>
        <span>
          <strong>I Nostri Social:</strong>
        </span>
        <div class="box has-text-centered">
        <button class="button is-success">
          <span class="icon is-small">
            <i class="fab fa-pinterest"></i>
          </span>
          <Link to={config.pinterestUrl} style={{ color: '#FFF' }}>Pinterest</Link>
        </button>
        <span>    </span>
        <button class="button is-success">
          <span class="icon is-small">
            <i class="fab fa-instagram"></i>
          </span>
          <Link  to={config.instagramUrl} style={{ color: '#FFF' }}>Instagram</Link>
        </button>
        </div>
        {/*
          <span class="icon is-small is-right">
            <i class="fab fa-pinterest"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fab fa-instagram"></i>
          </span>
        */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
