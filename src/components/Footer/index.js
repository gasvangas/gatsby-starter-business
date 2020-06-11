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
          <span class="icon has-text-success">
            <i class="mdi mdiPinterest" href={config.pinterestUrl}></i>
          </span>
          <span class="icon has-text-success">
            <i class="mdi mdiInstagram" href={config.instagramUrl}></i>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
