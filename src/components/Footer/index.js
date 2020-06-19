import React from 'react'
import config from '../../../config'

const Footer = () => {
  return (
    <footer className='footer'>
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>      <div className='container'>
        <div className='content has-text-centered'>
          <p>
            {config.copyright}
          </p>
        </div>
        <br />
        <span>
          I Nostri Social:
        </span>
        <div>
        <button class="button is-success">
          <span class="icon is-small">
            <i class="fab fa-pinterest"></i>
          </span>
          <span href={config.pinterestUrl}>Pinterest</span>
        </button>
        <button class="button is-success">
          <span class="icon is-small">
            <i class="fab fa-instagram"></i>
          </span>
          <span  href={config.instagramUrl}>Instagram</span>
        </button>
          <span class="icon is-small is-right">
            <i class="fab fa-pinterest"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fab fa-instagram"></i>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
