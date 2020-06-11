import React from 'react'
import config from '../../../config'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
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
        <button class="button is-medium">
          <span class="icon is-small">
            <i class="fas fa-pinterest"></i>
          </span>
          <span>Pinterest</span>
        </button>
        <button class="button is-medium">
          <span class="icon is-small">
            <i class="fas fa-instagram"></i>
          </span>
          <span>Instagram</span>
        </button>
          <span class="icon is-small is-right">
            <i class="fab fa-pinterest" href={config.pinterestUrl}></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fab fa-instagram" href={config.instagramUrl}></i>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
